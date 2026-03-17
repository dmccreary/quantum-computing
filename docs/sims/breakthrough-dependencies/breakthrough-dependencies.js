// Breakthrough Dependencies Map
// Interactive vis-network visualization showing the ten breakthroughs
// required for commercially viable quantum computing.

let network = null;
let graphData = null;
let nodesDataSet = null;
let edgesDataSet = null;
let progressValues = {};

// Color interpolation from red through orange/yellow to green based on progress
function progressColor(progress) {
    if (progress < 25) {
        return '#E53935'; // red
    } else if (progress < 50) {
        return '#FF7043'; // orange
    } else if (progress < 75) {
        return '#FFC107'; // yellow
    } else if (progress < 100) {
        return '#8BC34A'; // light green
    }
    return '#43A047'; // green at 100%
}

// Determine font color for readability on node background
function fontColorFor(progress) {
    if (progress < 50) return '#fff';
    if (progress < 75) return '#333';
    return '#fff';
}

async function loadData() {
    try {
        const response = await fetch('data.json');
        graphData = await response.json();
        initSliders();
        applyPreset('current');
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('network').innerHTML =
            '<p style="color:red;padding:20px;">Error loading data.json.</p>';
    }
}

function initSliders() {
    const section = document.getElementById('slider-section');
    // Keep the h5 header, add sliders after it
    const breakthroughNodes = graphData.nodes.filter(n => !n.isOutcome);
    breakthroughNodes.forEach(node => {
        progressValues[node.id] = 0;
        const row = document.createElement('div');
        row.className = 'slider-row';
        row.innerHTML = `
            <label title="${node.label}">${node.label}</label>
            <input type="range" min="0" max="100" value="0" id="slider-${node.id}">
            <span class="slider-value" id="val-${node.id}">0%</span>
        `;
        section.appendChild(row);

        const slider = row.querySelector('input[type="range"]');
        slider.addEventListener('input', function () {
            progressValues[node.id] = parseInt(this.value);
            document.getElementById(`val-${node.id}`).textContent = this.value + '%';
            updateNodeColors();
            updateSummary();
        });
    });
}

function applyPreset(preset) {
    const breakthroughNodes = graphData.nodes.filter(n => !n.isOutcome);
    breakthroughNodes.forEach(node => {
        let val = 0;
        if (preset === 'current') val = node.defaultProgress;
        else if (preset === 'optimistic') val = node.optimistic2035;
        else if (preset === 'all100') val = 100;
        else val = 0;

        progressValues[node.id] = val;
        const slider = document.getElementById(`slider-${node.id}`);
        const valSpan = document.getElementById(`val-${node.id}`);
        if (slider) slider.value = val;
        if (valSpan) valSpan.textContent = val + '%';
    });
    buildNetwork();
    updateSummary();
}

function buildNetwork() {
    const container = document.getElementById('network');

    // Build nodes
    const nodes = graphData.nodes.map(node => {
        const progress = node.isOutcome ? 0 : (progressValues[node.id] || 0);
        const isOutcome = node.isOutcome;
        const allAt100 = isOutcome && checkAllComplete();
        const bgColor = isOutcome
            ? (allAt100 ? '#43A047' : '#9E9E9E')
            : progressColor(progress);

        return {
            id: node.id,
            label: isOutcome
                ? (allAt100 ? 'Commercial\nViability' : 'Commercial\nViability\nBLOCKED')
                : `${node.label}\n${progress}%`,
            x: node.x,
            y: node.y,
            fixed: true,
            shape: isOutcome ? 'circle' : 'box',
            size: isOutcome ? 45 : undefined,
            color: {
                background: bgColor,
                border: isOutcome ? (allAt100 ? '#2E7D32' : '#757575') : darken(bgColor),
                highlight: { background: bgColor, border: '#333' },
                hover: { background: bgColor, border: '#555' }
            },
            font: {
                color: isOutcome ? '#fff' : fontColorFor(progress),
                size: isOutcome ? 13 : 12,
                face: 'Arial',
                bold: isOutcome
            },
            borderWidth: isOutcome ? 3 : 2,
            shadow: true,
            margin: isOutcome ? undefined : 8,
            title: node.description
        };
    });

    // Build edges
    const edges = [];

    // Dependency edges (dashed gray, to center)
    graphData.dependency_edges.forEach((edge, i) => {
        edges.push({
            id: `dep-${i}`,
            from: edge.from,
            to: edge.to,
            arrows: 'to',
            dashes: [6, 4],
            color: { color: '#999', opacity: 0.5 },
            width: 1.5,
            smooth: { type: 'curvedCW', roundness: 0.1 },
            edgeType: 'dependency'
        });
    });

    // Coupling edges (solid blue, between breakthroughs)
    graphData.coupling_edges.forEach((edge, i) => {
        const fromProgress = progressValues[edge.from] || 0;
        const toProgress = progressValues[edge.to] || 0;
        const bothLow = fromProgress < 30 && toProgress < 30;
        edges.push({
            id: `coupling-${i}`,
            from: edge.from,
            to: edge.to,
            arrows: 'to',
            dashes: false,
            color: { color: bothLow ? '#E53935' : '#42A5F5', opacity: bothLow ? 0.8 : 0.6 },
            width: bothLow ? 2.5 : 1.5,
            smooth: { type: 'curvedCW', roundness: 0.15 },
            title: edge.label,
            edgeType: 'coupling',
            couplingLabel: edge.label
        });
    });

    nodesDataSet = new vis.DataSet(nodes);
    edgesDataSet = new vis.DataSet(edges);

    const options = {
        layout: {
            randomSeed: 42
        },
        physics: {
            enabled: false
        },
        nodes: {
            shape: 'box',
            font: {
                size: 12,
                face: 'Arial',
                multi: true
            },
            borderWidth: 2,
            shadow: true
        },
        edges: {
            width: 1.5
        },
        interaction: {
            hover: true,
            tooltipDelay: 150,
            zoomView: false,
            dragView: false,
            dragNodes: false,
            navigationButtons: false,
            keyboard: false
        }
    };

    if (network) {
        network.destroy();
    }

    network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, options);

    // Hover on node: show details in info panel
    network.on('hoverNode', function (params) {
        const nodeId = params.node;
        const node = graphData.nodes.find(n => n.id === nodeId);
        if (node) {
            showNodeInfo(node);
        }
    });

    network.on('blurNode', function () {
        resetInfoPanel();
    });

    // Click on node: highlight dependency chain
    network.on('selectNode', function (params) {
        if (params.nodes.length > 0) {
            highlightDependencyChain(params.nodes[0]);
        }
    });

    network.on('deselectNode', function () {
        resetHighlight();
    });

    // Hover on edge: show coupling info
    network.on('hoverEdge', function (params) {
        const edge = edgesDataSet.get(params.edge);
        if (edge && edge.couplingLabel) {
            showEdgeInfo(edge);
        }
    });

    network.on('blurEdge', function () {
        resetInfoPanel();
    });
}

function updateNodeColors() {
    if (!nodesDataSet || !graphData) return;

    graphData.nodes.forEach(node => {
        const isOutcome = node.isOutcome;
        const progress = isOutcome ? 0 : (progressValues[node.id] || 0);
        const allAt100 = isOutcome && checkAllComplete();
        const bgColor = isOutcome
            ? (allAt100 ? '#43A047' : '#9E9E9E')
            : progressColor(progress);

        nodesDataSet.update({
            id: node.id,
            label: isOutcome
                ? (allAt100 ? 'Commercial\nViability' : 'Commercial\nViability\nBLOCKED')
                : `${node.label}\n${progress}%`,
            color: {
                background: bgColor,
                border: isOutcome ? (allAt100 ? '#2E7D32' : '#757575') : darken(bgColor),
                highlight: { background: bgColor, border: '#333' },
                hover: { background: bgColor, border: '#555' }
            },
            font: {
                color: isOutcome ? '#fff' : fontColorFor(progress),
                size: isOutcome ? 13 : 12,
                face: 'Arial'
            }
        });
    });

    // Update coupling edge colors (red when both nodes have low progress)
    graphData.coupling_edges.forEach((edge, i) => {
        const fromProgress = progressValues[edge.from] || 0;
        const toProgress = progressValues[edge.to] || 0;
        const bothLow = fromProgress < 30 && toProgress < 30;
        edgesDataSet.update({
            id: `coupling-${i}`,
            color: { color: bothLow ? '#E53935' : '#42A5F5', opacity: bothLow ? 0.8 : 0.6 },
            width: bothLow ? 2.5 : 1.5
        });
    });
}

function checkAllComplete() {
    const breakthroughNodes = graphData.nodes.filter(n => !n.isOutcome);
    return breakthroughNodes.every(n => (progressValues[n.id] || 0) >= 100);
}

function updateSummary() {
    const breakthroughNodes = graphData.nodes.filter(n => !n.isOutcome);
    const achieved = breakthroughNodes.filter(n => (progressValues[n.id] || 0) >= 100).length;
    const total = breakthroughNodes.length;
    const allDone = achieved === total;

    const summary = document.getElementById('progress-summary');
    summary.innerHTML = `
        Breakthroughs achieved: <span class="achieved">${achieved}/${total}</span><br>
        Commercial viability: <span class="viability-status ${allDone ? 'viable' : 'blocked'}">${allDone ? 'YES' : 'BLOCKED'}</span>
    `;
}

function showNodeInfo(node) {
    const panel = document.getElementById('info-panel');
    const progress = node.isOutcome ? (checkAllComplete() ? 100 : 0) : (progressValues[node.id] || 0);
    panel.innerHTML = `
        <h5>${node.label.replace('\n', ' ')}</h5>
        <p>${node.description}</p>
        ${!node.isOutcome ? `<p style="margin-top:6px;font-weight:600;">Progress: ${progress}%</p>` : ''}
    `;
}

function showEdgeInfo(edge) {
    const panel = document.getElementById('info-panel');
    const fromNode = graphData.nodes.find(n => n.id === edge.from);
    const toNode = graphData.nodes.find(n => n.id === edge.to);
    panel.innerHTML = `
        <h5>Coupling</h5>
        <div class="edge-tooltip">
            <strong>${fromNode ? fromNode.label : ''} &rarr; ${toNode ? toNode.label : ''}</strong><br>
            ${edge.couplingLabel}
        </div>
    `;
}

function resetInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.innerHTML = `
        <h5>Details</h5>
        <p class="info-placeholder">Hover over a node or edge for details.</p>
    `;
}

function highlightDependencyChain(nodeId) {
    if (!nodesDataSet) return;

    // Find connected nodes
    const connectedEdges = edgesDataSet.get().filter(
        e => e.from === nodeId || e.to === nodeId
    );
    const connectedNodeIds = new Set([nodeId]);
    connectedEdges.forEach(e => {
        connectedNodeIds.add(e.from);
        connectedNodeIds.add(e.to);
    });

    // Dim unconnected nodes
    graphData.nodes.forEach(node => {
        const isConnected = connectedNodeIds.has(node.id);
        nodesDataSet.update({
            id: node.id,
            opacity: isConnected ? 1.0 : 0.2
        });
    });

    // Dim unconnected edges
    edgesDataSet.get().forEach(edge => {
        const isConnected = edge.from === nodeId || edge.to === nodeId;
        edgesDataSet.update({
            id: edge.id,
            hidden: !isConnected
        });
    });
}

function resetHighlight() {
    if (!nodesDataSet) return;
    graphData.nodes.forEach(node => {
        nodesDataSet.update({ id: node.id, opacity: 1.0 });
    });
    edgesDataSet.get().forEach(edge => {
        edgesDataSet.update({ id: edge.id, hidden: false });
    });
}

// Simple color darkening for borders
function darken(hex) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, (num >> 16) - 40);
    const g = Math.max(0, ((num >> 8) & 0x00FF) - 40);
    const b = Math.max(0, (num & 0x0000FF) - 40);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

// Preset button handlers
document.getElementById('btn-current').addEventListener('click', () => applyPreset('current'));
document.getElementById('btn-optimistic').addEventListener('click', () => applyPreset('optimistic'));
document.getElementById('btn-all100').addEventListener('click', () => applyPreset('all100'));
document.getElementById('btn-reset').addEventListener('click', () => applyPreset('reset'));

// Initialize
document.addEventListener('DOMContentLoaded', loadData);
