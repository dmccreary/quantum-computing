// Technology Bubble Dynamics Model
// vis-network interactive causal loop diagram

let network = null;
let graphData = null;
let allNodes = null;
let allEdges = null;
let currentFilter = 'all';

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        graphData = data;
        initNetwork(data);
        initFilterButtons();
    })
    .catch(err => console.error('Failed to load data.json:', err));

function initNetwork(data) {
    const container = document.getElementById('network');
    const categoryColors = data.categories;

    // Build vis-network nodes
    const nodeArray = data.nodes.map(n => {
        const cat = categoryColors[n.category];
        // Scale node size by number of connections
        const connectionCount = data.edges.filter(e => e.from === n.id || e.to === n.id).length;
        const nodeSize = 25 + connectionCount * 3;

        return {
            id: n.id,
            label: n.label,
            title: n.title,
            x: n.x * 1.6,
            y: n.y * 1.3,
            fixed: { x: true, y: true },
            color: {
                background: cat.color,
                border: darkenColor(cat.color, 0.3),
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
                size: 12,
                face: 'Arial',
                strokeWidth: 2,
                strokeColor: 'rgba(0,0,0,0.5)',
                multi: true
            },
            shape: 'ellipse',
            size: nodeSize,
            borderWidth: 2,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.15)',
                size: 6,
                x: 2,
                y: 2
            },
            category: n.category,
            example: n.example
        };
    });

    // Build vis-network edges
    const edgeArray = data.edges.map((e, i) => {
        const edgeColor = e.polarity === '-' ? '#EA4335' : '#34A853';
        return {
            id: i,
            from: e.from,
            to: e.to,
            label: '',
            title: e.title,
            arrows: { to: { enabled: true, scaleFactor: 0.7 } },
            color: {
                color: edgeColor,
                highlight: '#3F51B5',
                hover: darkenColor(edgeColor, 0.2)
            },
            width: 1.8,
            hoverWidth: 0.5,
            selectionWidth: 1,
            smooth: {
                type: 'curvedCW',
                roundness: 0.18
            },
            font: {
                size: 9,
                color: '#444',
                strokeWidth: 2,
                strokeColor: 'rgba(240, 248, 255, 0.9)',
                align: 'middle',
                multi: true
            },
            edgeLabel: e.label,
            polarity: e.polarity,
            loop: e.loop
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

    // Click handler: highlight connected nodes and cycle path
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            highlightNode(params.nodes[0]);
        } else {
            resetHighlight();
            resetPanel();
        }
    });

    // Hover handler: show edge labels on hover
    network.on('hoverEdge', function(params) {
        const edge = allEdges.get(params.edge);
        if (edge && edge.edgeLabel) {
            allEdges.update({ id: edge.id, label: edge.edgeLabel });
        }
    });

    network.on('blurEdge', function(params) {
        allEdges.update({ id: params.edge, label: '' });
    });
}

function highlightNode(nodeId) {
    const node = allNodes.get(nodeId);
    if (!node) return;

    // Find connected edges and nodes
    const connectedEdges = allEdges.get().filter(e => e.from === nodeId || e.to === nodeId);
    const connectedNodeIds = new Set([nodeId]);
    connectedEdges.forEach(e => {
        connectedNodeIds.add(e.from);
        connectedNodeIds.add(e.to);
    });

    // Dim unconnected nodes
    const nodeUpdates = allNodes.get().map(n => {
        if (connectedNodeIds.has(n.id)) {
            return { id: n.id, opacity: 1.0 };
        } else {
            return { id: n.id, opacity: 0.15 };
        }
    });
    allNodes.update(nodeUpdates);

    // Highlight connected edges, dim others, show labels on connected
    const edgeUpdates = allEdges.get().map(e => {
        const isConnected = e.from === nodeId || e.to === nodeId;
        if (isConnected) {
            const edgeColor = e.polarity === '-' ? '#EA4335' : '#34A853';
            return {
                id: e.id,
                color: { color: darkenColor(edgeColor, 0.1), highlight: '#3F51B5' },
                width: 3.5,
                label: e.edgeLabel
            };
        } else {
            return {
                id: e.id,
                color: { color: 'rgba(153,153,153,0.12)', highlight: '#3F51B5' },
                width: 0.5,
                label: ''
            };
        }
    });
    allEdges.update(edgeUpdates);

    // Update right panel
    updatePanel(nodeId, connectedEdges);
}

function resetHighlight() {
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: 1.0
    }));
    allNodes.update(nodeUpdates);

    const edgeUpdates = allEdges.get().map(e => {
        const edgeColor = e.polarity === '-' ? '#EA4335' : '#34A853';
        return {
            id: e.id,
            color: { color: edgeColor, highlight: '#3F51B5', hover: darkenColor(edgeColor, 0.2) },
            width: 1.8,
            label: ''
        };
    });
    allEdges.update(edgeUpdates);

    // Reapply current filter
    if (currentFilter !== 'all') {
        applyFilter(currentFilter);
    }
}

function updatePanel(nodeId, connectedEdges) {
    const node = allNodes.get(nodeId);
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');

    const catLabel = graphData.categories[node.category].label;

    // Find which loops this node belongs to
    const nodeLoops = [];
    if (graphData.loops) {
        for (const [key, loop] of Object.entries(graphData.loops)) {
            if (loop.nodes.includes(nodeId)) {
                nodeLoops.push(loop);
            }
        }
    }

    let connectionsHtml = '<ul class="connection-list">';
    connectedEdges.forEach(e => {
        const otherNodeId = e.from === nodeId ? e.to : e.from;
        const otherNode = allNodes.get(otherNodeId);
        const direction = e.from === nodeId ? '\u2192' : '\u2190';
        const polarityClass = e.polarity === '-' ? 'polarity-negative' : 'polarity-positive';
        const polaritySymbol = e.polarity === '-' ? '(-)' : '(+)';
        connectionsHtml += `<li><span class="connection-arrow">${direction}</span> <span class="${polarityClass}">${polaritySymbol}</span> ${otherNode.label.replace('\n', ' ')}</li>`;
    });
    connectionsHtml += '</ul>';

    let loopsHtml = '';
    if (nodeLoops.length > 0) {
        loopsHtml = '<p style="margin-top:10px;font-weight:bold;font-size:12px;">Feedback Loops:</p><ul class="connection-list">';
        nodeLoops.forEach(loop => {
            const loopColor = loop.type === 'reinforcing' ? '#34A853' : '#EA4335';
            loopsHtml += `<li style="color:${loopColor};font-weight:bold;">${loop.label}</li>`;
            loopsHtml += `<li style="font-size:11px;color:#666;">${loop.description}</li>`;
        });
        loopsHtml += '</ul>';
    }

    panelTitle.textContent = node.label.replace('\n', ' ');
    panelBody.innerHTML = `
        <p><strong>Category:</strong> ${catLabel}</p>
        <p style="margin-top:6px;">${node.title}</p>
        <p style="margin-top:8px;font-style:italic;color:#444;">"${node.example}"</p>
        <p style="margin-top:10px;font-weight:bold;font-size:12px;">Connections (${connectedEdges.length}):</p>
        ${connectionsHtml}
        ${loopsHtml}
    `;
}

function resetPanel() {
    document.getElementById('panel-title').textContent = 'Select a Variable';
    document.getElementById('panel-body').textContent = 'Click on any node to see a QC-specific example and its causal connections in the bubble dynamics model.';
}

// Loop filter buttons
function initFilterButtons() {
    const buttons = document.querySelectorAll('#loop-filter button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            resetHighlight();
            resetPanel();
            applyFilter(currentFilter);
        });
    });
}

function applyFilter(filter) {
    if (filter === 'all') {
        // Show everything at full opacity
        const nodeUpdates = allNodes.get().map(n => ({ id: n.id, opacity: 1.0 }));
        allNodes.update(nodeUpdates);
        const edgeUpdates = allEdges.get().map(e => {
            const edgeColor = e.polarity === '-' ? '#EA4335' : '#34A853';
            return {
                id: e.id,
                color: { color: edgeColor, highlight: '#3F51B5', hover: darkenColor(edgeColor, 0.2) },
                width: 1.8
            };
        });
        allEdges.update(edgeUpdates);
        return;
    }

    // Get all loop nodes and edges for the selected type
    const loopNodeIds = new Set();
    const loopEdgeLoops = new Set();

    if (graphData.loops) {
        for (const [key, loop] of Object.entries(graphData.loops)) {
            if (loop.type === filter) {
                loop.nodes.forEach(id => loopNodeIds.add(id));
                loopEdgeLoops.add(key);
            }
        }
    }

    // Find edges that belong to the filtered loops
    const matchingEdges = allEdges.get().filter(e => {
        if (filter === 'reinforcing') return e.polarity === '+' && loopNodeIds.has(e.from) && loopNodeIds.has(e.to);
        if (filter === 'balancing') return e.loop && loopEdgeLoops.has(e.loop) || (e.polarity === '-' && loopNodeIds.has(e.from) && loopNodeIds.has(e.to));
        return false;
    });

    const matchingEdgeIds = new Set(matchingEdges.map(e => e.id));
    const activeNodeIds = new Set();
    matchingEdges.forEach(e => {
        activeNodeIds.add(e.from);
        activeNodeIds.add(e.to);
    });

    // Dim non-matching nodes
    const nodeUpdates = allNodes.get().map(n => ({
        id: n.id,
        opacity: activeNodeIds.has(n.id) ? 1.0 : 0.15
    }));
    allNodes.update(nodeUpdates);

    // Dim non-matching edges
    const edgeUpdates = allEdges.get().map(e => {
        if (matchingEdgeIds.has(e.id)) {
            const edgeColor = e.polarity === '-' ? '#EA4335' : '#34A853';
            return {
                id: e.id,
                color: { color: edgeColor, highlight: '#3F51B5' },
                width: 2.5,
                label: e.edgeLabel
            };
        } else {
            return {
                id: e.id,
                color: { color: 'rgba(153,153,153,0.1)', highlight: '#3F51B5' },
                width: 0.3,
                label: ''
            };
        }
    });
    allEdges.update(edgeUpdates);
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
