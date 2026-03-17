// Hype Reinforcement Loop — vis-network causal loop diagram
// Reinforcing loop (R): Media Coverage -> Public Excitement -> Political Pressure
//   -> Funding -> Publications -> Bold Claims -> Media Coverage
// Balancing loop (B): Bold Claims -> Failed Predictions -> Skeptical Analysis -> Public Excitement (dampens)

let network = null;
let graphData = null;
let allNodes = null;
let allEdges = null;

// Define loop membership for highlight on click
const reinforcingNodeIds = [1, 2, 3, 4, 5, 6];
const reinforcingEdgeIds = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
const balancingNodeIds = [6, 8, 7, 2];
const balancingEdgeIds = ['b1', 'b2', 'b3'];

// Pulse animation state
let pulseIndex = 0;
let pulseInterval = null;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        graphData = data;
        initNetwork(data);
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
            x: n.x * 1.4,
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
        const edgeColor = isReinforcing ? '#FF7043' : '#607D8B';
        return {
            id: e.id,
            from: e.from,
            to: e.to,
            label: e.label,
            title: e.title,
            arrows: { to: { enabled: true, scaleFactor: 0.9 } },
            color: {
                color: edgeColor,
                highlight: isReinforcing ? '#E64A19' : '#455A64',
                hover: isReinforcing ? '#E64A19' : '#455A64'
            },
            width: isReinforcing ? 3 : 2.5,
            hoverWidth: 0.5,
            selectionWidth: 1.5,
            smooth: {
                type: 'curvedCW',
                roundness: isReinforcing ? 0.2 : 0.3
            },
            font: {
                size: 16,
                color: isReinforcing ? '#E64A19' : '#455A64',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            },
            loop: e.loop,
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

    // Click handler: highlight loop path
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            stopPulse();
            highlightNode(params.nodes[0]);
        } else {
            resetHighlight();
            resetPanel();
            startPulse();
        }
    });

    // Start the pulse animation
    startPulse();
}

function highlightNode(nodeId) {
    const node = allNodes.get(nodeId);
    if (!node) return;

    // Determine which loops this node belongs to
    const inReinforcing = reinforcingNodeIds.includes(nodeId);
    const inBalancing = balancingNodeIds.includes(nodeId);

    // Collect all nodes and edges to highlight
    const highlightNodeSet = new Set();
    const highlightEdgeSet = new Set();

    if (inReinforcing) {
        reinforcingNodeIds.forEach(id => highlightNodeSet.add(id));
        reinforcingEdgeIds.forEach(id => highlightEdgeSet.add(id));
    }
    if (inBalancing) {
        balancingNodeIds.forEach(id => highlightNodeSet.add(id));
        balancingEdgeIds.forEach(id => highlightEdgeSet.add(id));
    }

    // Dim unconnected nodes
    const nodeUpdates = allNodes.get().map(n => {
        if (highlightNodeSet.has(n.id)) {
            return { id: n.id, opacity: 1.0 };
        } else {
            return { id: n.id, opacity: 0.15 };
        }
    });
    allNodes.update(nodeUpdates);

    // Highlight loop edges, dim others
    const edgeUpdates = allEdges.get().map(e => {
        const isHighlighted = highlightEdgeSet.has(e.id);
        const isReinforcing = e.loop === 'reinforcing';
        const activeColor = isReinforcing ? '#FF7043' : '#607D8B';
        return {
            id: e.id,
            color: isHighlighted
                ? { color: activeColor, highlight: activeColor }
                : { color: 'rgba(153,153,153,0.12)', highlight: 'rgba(153,153,153,0.12)' },
            width: isHighlighted ? 4 : 0.5,
            font: {
                size: 16,
                color: isHighlighted ? (isReinforcing ? '#E64A19' : '#455A64') : 'rgba(0,0,0,0.05)',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            }
        };
    });
    allEdges.update(edgeUpdates);

    // Update right panel
    updatePanel(nodeId, inReinforcing, inBalancing);
}

function resetHighlight() {
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: 1.0
    }));
    allNodes.update(nodeUpdates);

    const edgeUpdates = allEdges.get().map(e => {
        const isReinforcing = e.loop === 'reinforcing';
        const edgeColor = isReinforcing ? '#FF7043' : '#607D8B';
        return {
            id: e.id,
            color: {
                color: edgeColor,
                highlight: isReinforcing ? '#E64A19' : '#455A64',
                hover: isReinforcing ? '#E64A19' : '#455A64'
            },
            width: isReinforcing ? 3 : 2.5,
            font: {
                size: 16,
                color: isReinforcing ? '#E64A19' : '#455A64',
                strokeWidth: 3,
                strokeColor: 'rgba(240,248,255,0.9)',
                align: 'middle',
                bold: true
            }
        };
    });
    allEdges.update(edgeUpdates);
}

function updatePanel(nodeId, inReinforcing, inBalancing) {
    const node = allNodes.get(nodeId);
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');

    const label = node.label.replace('\n', ' ');
    panelTitle.textContent = label;

    let html = `<p>${node.title}</p>`;

    if (inReinforcing) {
        html += '<p style="margin-top:10px;font-weight:bold;font-size:12px;color:#E64A19;">Reinforcing Loop (R):</p>';
        html += '<ul class="loop-path">';
        const loopLabels = ['Media Coverage', 'Public Excitement', 'Political Pressure',
                           'Gov\'t & Corp. Funding', 'Publications & Press Releases', 'Bold Claims'];
        for (let i = 0; i < 6; i++) {
            const isCurrent = reinforcingNodeIds[i] === nodeId;
            html += `<li>${isCurrent ? '<strong>' : ''}${loopLabels[i]}${isCurrent ? '</strong>' : ''} <span class="loop-arrow positive">+</span></li>`;
        }
        html += '</ul>';
        html += '<p style="font-size:11px;color:#888;margin-top:4px;">Each element amplifies the next, creating a self-reinforcing hype cycle.</p>';
    }

    if (inBalancing) {
        html += '<p style="margin-top:10px;font-weight:bold;font-size:12px;color:#455A64;">Balancing Loop (B):</p>';
        html += '<ul class="loop-path">';
        const balLabels = ['Bold Claims', 'Failed Predictions', 'Skeptical Analysis', 'Public Excitement'];
        const balSigns = ['-', '-', '-'];
        for (let i = 0; i < 4; i++) {
            const isCurrent = balancingNodeIds[i] === nodeId;
            html += `<li>${isCurrent ? '<strong>' : ''}${balLabels[i]}${isCurrent ? '</strong>' : ''}`;
            if (i < 3) html += ` <span class="loop-arrow negative">${balSigns[i]}</span>`;
            html += '</li>';
        }
        html += '</ul>';
        html += '<p style="font-size:11px;color:#888;margin-top:4px;">Reality eventually dampens the hype cycle through accumulated evidence.</p>';
    }

    panelBody.innerHTML = html;
}

function resetPanel() {
    document.getElementById('panel-title').textContent = 'Hype Reinforcement Loop';
    document.getElementById('panel-body').textContent = 'Click on any node to see its role in the hype cycle. The reinforcing loop (orange arrows) shows how hype amplifies itself. The balancing loop (gray arrows) shows how reality can dampen the cycle.';
}

// Pulse animation: sequentially highlight reinforcing loop edges
function startPulse() {
    if (pulseInterval) return;
    pulseIndex = 0;
    pulseInterval = setInterval(() => {
        if (!allEdges) return;
        // Reset previous edge
        const prevIndex = (pulseIndex - 1 + reinforcingEdgeIds.length) % reinforcingEdgeIds.length;
        const prevEdgeId = reinforcingEdgeIds[prevIndex];
        allEdges.update({
            id: prevEdgeId,
            width: 3
        });

        // Pulse current edge
        const currentEdgeId = reinforcingEdgeIds[pulseIndex];
        allEdges.update({
            id: currentEdgeId,
            width: 5
        });

        pulseIndex = (pulseIndex + 1) % reinforcingEdgeIds.length;
    }, 1000);
}

function stopPulse() {
    if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
        // Reset all reinforcing edges to normal width
        reinforcingEdgeIds.forEach(id => {
            allEdges.update({ id: id, width: 3 });
        });
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
