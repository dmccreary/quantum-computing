// QC Feedback Loop System — vis-network causal loop diagram
// R1: Hype Cycle (Research Funding -> Published Results -> Media Coverage -> Public Expectations -> Political Pressure -> Research Funding)
// R2: Investment Cycle (Industry Investment -> Actual Progress -> Published Results -> Media Coverage -> Industry Investment)
// B1: Reality Check (Actual Progress -> Hype Gap <- Public Expectations, Hype Gap -> Industry Investment dampens)

let network = null;
let graphData = null;
let allNodes = null;
let allEdges = null;
let activeLoop = null;

// Pulse animation state
let pulseIndex = 0;
let pulseInterval = null;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        graphData = data;
        initNetwork(data);
        setupLoopButtons();
    })
    .catch(err => console.error('Failed to load data.json:', err));

function initNetwork(data) {
    const container = document.getElementById('network');
    const categoryColors = data.categories;

    // Build vis-network nodes
    const nodeArray = data.nodes.map(n => {
        const cat = categoryColors[n.category];
        return {
            id: n.id,
            label: n.label,
            title: n.title,
            x: n.x * 1.3,
            y: n.y * 1.1,
            fixed: { x: true, y: true },
            color: {
                background: cat.color,
                border: darkenColor(cat.color, 0.25),
                highlight: {
                    background: lightenColor(cat.color, 0.2),
                    border: darkenColor(cat.color, 0.4)
                },
                hover: {
                    background: lightenColor(cat.color, 0.15),
                    border: darkenColor(cat.color, 0.35)
                }
            },
            font: {
                color: '#fff',
                size: 13,
                face: 'Arial',
                strokeWidth: 2,
                strokeColor: 'rgba(0,0,0,0.5)',
                multi: true
            },
            shape: 'box',
            borderRadius: 8,
            size: 30,
            borderWidth: 2,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.15)',
                size: 6,
                x: 2,
                y: 2
            },
            margin: 10,
            category: n.category
        };
    });

    // Build vis-network edges
    const edgeArray = data.edges.map(e => {
        const isReinforcing = e.loop === 'reinforcing';
        const edgeColor = isReinforcing ? '#FF7043' : '#1565C0';
        return {
            id: e.id,
            from: e.from,
            to: e.to,
            label: e.label,
            title: e.title,
            arrows: { to: { enabled: true, scaleFactor: 0.9 } },
            color: {
                color: edgeColor,
                highlight: isReinforcing ? '#E64A19' : '#0D47A1',
                hover: isReinforcing ? '#E64A19' : '#0D47A1'
            },
            width: isReinforcing ? 3 : 2.5,
            dashes: isReinforcing ? false : [8, 4],
            hoverWidth: 0.5,
            selectionWidth: 1.5,
            smooth: {
                type: 'curvedCW',
                roundness: 0.2
            },
            font: {
                size: 16,
                color: isReinforcing ? '#E64A19' : '#0D47A1',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            },
            loop: e.loop,
            loopId: e.loopId,
            mechanism: e.mechanism
        };
    });

    allNodes = new vis.DataSet(nodeArray);
    allEdges = new vis.DataSet(edgeArray);

    const options = {
        interaction: {
            zoomView: false,
            dragView: false,
            dragNodes: false,
            hover: true,
            tooltipDelay: 200
        },
        physics: {
            enabled: false
        },
        nodes: {
            chosen: true
        },
        edges: {
            chosen: true
        }
    };

    network = new vis.Network(container, { nodes: allNodes, edges: allEdges }, options);

    // Click handler
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            stopPulse();
            clearLoopButtons();
            highlightNodeLoops(params.nodes[0]);
        } else {
            resetAll();
        }
    });

    // Start pulse on R1
    startPulse('R1');
}

function setupLoopButtons() {
    document.querySelectorAll('.loop-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const loopId = this.dataset.loop;
            if (loopId === 'reset') {
                resetAll();
            } else {
                stopPulse();
                clearLoopButtons();
                this.classList.add('active');
                highlightLoop(loopId);
            }
        });
    });
}

function clearLoopButtons() {
    document.querySelectorAll('.loop-btn').forEach(btn => btn.classList.remove('active'));
}

function highlightLoop(loopId) {
    activeLoop = loopId;
    const loop = graphData.loops[loopId];
    if (!loop) return;

    const highlightNodeSet = new Set(loop.nodeIds);
    const highlightEdgeSet = new Set(loop.edgeIds);

    // Dim unconnected nodes
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: highlightNodeSet.has(n.id) ? 1.0 : 0.15
    }));
    allNodes.update(nodeUpdates);

    // Highlight loop edges, dim others
    const edgeUpdates = allEdges.get().map(e => {
        const isHighlighted = highlightEdgeSet.has(e.id);
        const isReinforcing = e.loop === 'reinforcing';
        const activeColor = isReinforcing ? '#FF7043' : '#1565C0';
        return {
            id: e.id,
            color: isHighlighted
                ? { color: activeColor, highlight: activeColor }
                : { color: 'rgba(153,153,153,0.12)', highlight: 'rgba(153,153,153,0.12)' },
            width: isHighlighted ? 4 : 0.5,
            font: {
                size: 16,
                color: isHighlighted ? (isReinforcing ? '#E64A19' : '#0D47A1') : 'rgba(0,0,0,0.05)',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            }
        };
    });
    allEdges.update(edgeUpdates);

    // Update panel
    updatePanelForLoop(loopId);
}

function highlightNodeLoops(nodeId) {
    // Find all loops this node belongs to
    const memberLoops = [];
    for (const [loopId, loop] of Object.entries(graphData.loops)) {
        if (loop.nodeIds.includes(nodeId)) {
            memberLoops.push(loopId);
        }
    }

    if (memberLoops.length === 0) {
        // Node not in any defined loop — just show node info
        updatePanelForNode(nodeId, []);
        return;
    }

    // Collect all nodes and edges across all member loops
    const highlightNodeSet = new Set();
    const highlightEdgeSet = new Set();
    memberLoops.forEach(loopId => {
        const loop = graphData.loops[loopId];
        loop.nodeIds.forEach(id => highlightNodeSet.add(id));
        loop.edgeIds.forEach(id => highlightEdgeSet.add(id));
    });

    // Dim unconnected
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: highlightNodeSet.has(n.id) ? 1.0 : 0.15
    }));
    allNodes.update(nodeUpdates);

    const edgeUpdates = allEdges.get().map(e => {
        const isHighlighted = highlightEdgeSet.has(e.id);
        const isReinforcing = e.loop === 'reinforcing';
        const activeColor = isReinforcing ? '#FF7043' : '#1565C0';
        return {
            id: e.id,
            color: isHighlighted
                ? { color: activeColor, highlight: activeColor }
                : { color: 'rgba(153,153,153,0.12)', highlight: 'rgba(153,153,153,0.12)' },
            width: isHighlighted ? 4 : 0.5,
            font: {
                size: 16,
                color: isHighlighted ? (isReinforcing ? '#E64A19' : '#0D47A1') : 'rgba(0,0,0,0.05)',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            }
        };
    });
    allEdges.update(edgeUpdates);

    updatePanelForNode(nodeId, memberLoops);
}

function updatePanelForLoop(loopId) {
    const loop = graphData.loops[loopId];
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');

    panelTitle.textContent = loop.label;

    const isReinforcing = loop.type === 'reinforcing';
    let html = `<span class="loop-type-label ${loop.type}">${isReinforcing ? 'Reinforcing' : 'Balancing'} Loop</span>`;
    html += `<p style="margin-top:8px;">${loop.description}</p>`;

    // Show the path
    html += '<ul class="loop-path">';
    loop.nodeIds.forEach((nid, i) => {
        const node = graphData.nodes.find(n => n.id === nid);
        const label = node.label.replace('\n', ' ');
        const sign = isReinforcing ? '+' : (i < loop.nodeIds.length - 1 ? getEdgeSign(loop.edgeIds[i]) : '');
        const arrowClass = isReinforcing ? 'positive' : 'negative';
        html += `<li>${label}`;
        if (i < loop.edgeIds.length) {
            html += ` <span class="loop-arrow ${arrowClass}">${sign}</span>`;
        }
        html += '</li>';
    });
    html += '</ul>';

    panelBody.innerHTML = html;
}

function updatePanelForNode(nodeId, memberLoops) {
    const node = graphData.nodes.find(n => n.id === nodeId);
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');

    panelTitle.textContent = node.label.replace('\n', ' ');

    let html = `<p>${node.title}</p>`;

    memberLoops.forEach(loopId => {
        const loop = graphData.loops[loopId];
        const isReinforcing = loop.type === 'reinforcing';
        html += `<p style="margin-top:10px;"><span class="loop-type-label ${loop.type}">${loop.label}</span></p>`;
        html += '<ul class="loop-path">';
        loop.nodeIds.forEach((nid, i) => {
            const n = graphData.nodes.find(nd => nd.id === nid);
            const label = n.label.replace('\n', ' ');
            const isCurrent = nid === nodeId;
            const sign = i < loop.edgeIds.length ? getEdgeSign(loop.edgeIds[i]) : '';
            const arrowClass = isReinforcing ? 'positive' : 'negative';
            html += `<li>${isCurrent ? '<strong>' : ''}${label}${isCurrent ? '</strong>' : ''}`;
            if (sign) {
                html += ` <span class="loop-arrow ${arrowClass}">${sign}</span>`;
            }
            html += '</li>';
        });
        html += '</ul>';
    });

    panelBody.innerHTML = html;
}

function getEdgeSign(edgeId) {
    const edge = graphData.edges.find(e => e.id === edgeId);
    return edge ? edge.label : '';
}

function resetAll() {
    activeLoop = null;
    clearLoopButtons();
    resetHighlight();
    resetPanel();
    startPulse('R1');
}

function resetHighlight() {
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: 1.0
    }));
    allNodes.update(nodeUpdates);

    const edgeUpdates = allEdges.get().map(e => {
        const isReinforcing = e.loop === 'reinforcing';
        const edgeColor = isReinforcing ? '#FF7043' : '#1565C0';
        return {
            id: e.id,
            color: {
                color: edgeColor,
                highlight: isReinforcing ? '#E64A19' : '#0D47A1',
                hover: isReinforcing ? '#E64A19' : '#0D47A1'
            },
            width: isReinforcing ? 3 : 2.5,
            font: {
                size: 16,
                color: isReinforcing ? '#E64A19' : '#0D47A1',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            }
        };
    });
    allEdges.update(edgeUpdates);
}

function resetPanel() {
    document.getElementById('panel-title').textContent = 'QC Feedback Loop System';
    document.getElementById('panel-body').textContent = 'This diagram maps the complete system of reinforcing and balancing feedback loops driving quantum computing investment. Two reinforcing loops (R1, R2) amplify hype and investment. One balancing loop (B1) should provide self-correction through the hype gap \u2014 but is often overpowered. Click any node or loop button to explore.';
}

// Pulse animation: sequentially highlight R1 edges
function startPulse(loopId) {
    if (pulseInterval) return;
    const loop = graphData.loops[loopId];
    if (!loop) return;
    const edgeIds = loop.edgeIds;
    pulseIndex = 0;
    pulseInterval = setInterval(() => {
        if (!allEdges) return;
        // Reset previous edge
        const prevIndex = (pulseIndex - 1 + edgeIds.length) % edgeIds.length;
        allEdges.update({ id: edgeIds[prevIndex], width: 3 });
        // Pulse current edge
        allEdges.update({ id: edgeIds[pulseIndex], width: 6 });
        pulseIndex = (pulseIndex + 1) % edgeIds.length;
    }, 800);
}

function stopPulse() {
    if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
        // Reset all edges to normal width
        if (allEdges) {
            allEdges.get().forEach(e => {
                const isReinforcing = e.loop === 'reinforcing';
                allEdges.update({ id: e.id, width: isReinforcing ? 3 : 2.5 });
            });
        }
    }
}

// Color utility functions
function darkenColor(hex, amount) {
    const rgb = hexToRgb(hex);
    return `rgb(${Math.round(rgb.r * (1 - amount))}, ${Math.round(rgb.g * (1 - amount))}, ${Math.round(rgb.b * (1 - amount))})`;
}

function lightenColor(hex, amount) {
    const rgb = hexToRgb(hex);
    return `rgb(${Math.min(255, Math.round(rgb.r + (255 - rgb.r) * amount))}, ${Math.min(255, Math.round(rgb.g + (255 - rgb.g) * amount))}, ${Math.min(255, Math.round(rgb.b + (255 - rgb.b) * amount))})`;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}
