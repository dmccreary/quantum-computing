// Cognitive Bias Network in QC Investment
// vis-network interactive graph

let network = null;
let graphData = null;
let allNodes = null;
let allEdges = null;

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
            x: n.x * 1.8,
            y: n.y * 1.4,
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
                size: 13,
                face: 'Arial',
                strokeWidth: 2,
                strokeColor: 'rgba(0,0,0,0.5)',
                multi: true
            },
            shape: 'ellipse',
            size: 30,
            borderWidth: 2,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.15)',
                size: 6,
                x: 2,
                y: 2
            },
            // Store custom data
            category: n.category,
            example: n.example
        };
    });

    // Build vis-network edges
    const edgeArray = data.edges.map((e, i) => ({
        id: i,
        from: e.from,
        to: e.to,
        label: '',
        title: e.title,
        arrows: { to: { enabled: true, scaleFactor: 0.7 } },
        color: {
            color: '#999',
            highlight: '#3F51B5',
            hover: '#666'
        },
        width: 1.5,
        hoverWidth: 0.5,
        selectionWidth: 1,
        smooth: {
            type: 'curvedCW',
            roundness: 0.15
        },
        font: {
            size: 10,
            color: '#555',
            strokeWidth: 2,
            strokeColor: '#fff',
            align: 'middle',
            multi: true
        },
        edgeLabel: e.label
    }));

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

    // Click handler: highlight connected nodes
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
        return {
            id: e.id,
            color: isConnected
                ? { color: '#3F51B5', highlight: '#3F51B5' }
                : { color: 'rgba(153,153,153,0.15)', highlight: '#3F51B5' },
            width: isConnected ? 3 : 0.5,
            label: isConnected ? e.edgeLabel : ''
        };
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

    const edgeUpdates = allEdges.get().map(e => ({
        id: e.id,
        color: { color: '#999', highlight: '#3F51B5', hover: '#666' },
        width: 1.5,
        label: ''
    }));
    allEdges.update(edgeUpdates);
}

function updatePanel(nodeId, connectedEdges) {
    const node = allNodes.get(nodeId);
    const panelTitle = document.getElementById('panel-title');
    const panelBody = document.getElementById('panel-body');

    const catLabel = graphData.categories[node.category].label;

    let connectionsHtml = '<ul class="connection-list">';
    connectedEdges.forEach(e => {
        const otherNodeId = e.from === nodeId ? e.to : e.from;
        const otherNode = allNodes.get(otherNodeId);
        const direction = e.from === nodeId ? '\u2192' : '\u2190';
        connectionsHtml += `<li><span class="connection-arrow">${direction}</span> ${otherNode.label.replace('\n', ' ')}: ${e.title}</li>`;
    });
    connectionsHtml += '</ul>';

    panelTitle.textContent = node.label.replace('\n', ' ');
    panelBody.innerHTML = `
        <p><strong>Category:</strong> ${catLabel}</p>
        <p style="margin-top:6px;">${node.title}</p>
        <p style="margin-top:8px;font-style:italic;color:#444;">"${node.example}"</p>
        <p style="margin-top:10px;font-weight:bold;font-size:12px;">Connections (${connectedEdges.length}):</p>
        ${connectionsHtml}
    `;
}

function resetPanel() {
    document.getElementById('panel-title').textContent = 'Select a Bias';
    document.getElementById('panel-body').textContent = 'Click on any bias node to see a QC-specific example and its reinforcement connections.';
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
