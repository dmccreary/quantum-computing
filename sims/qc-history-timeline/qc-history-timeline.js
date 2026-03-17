// QC History Timeline - vis-timeline implementation
let timeline;
let allItems;
let rawData;

const categoryColors = {
    theory: '#2196F3',
    hardware: '#4CAF50',
    industry: '#FF9800',
    milestone: '#F44336'
};

document.addEventListener('DOMContentLoaded', function() {
    fetch('timeline.json')
        .then(response => response.json())
        .then(data => {
            rawData = data;
            initTimeline(data);
            initFilters();
        })
        .catch(err => {
            console.error('Failed to load timeline data:', err);
            document.getElementById('timeline').innerHTML =
                '<p style="padding:20px;color:red;">Error loading timeline data.</p>';
        });
});

function initTimeline(data) {
    const items = data.map(event => ({
        id: event.id,
        content: event.content,
        start: event.start,
        className: event.category,
        title: buildTooltip(event)
    }));

    allItems = new vis.DataSet(items);

    const container = document.getElementById('timeline');
    const options = {
        width: '100%',
        height: '300px',
        min: new Date(1979, 0, 1),
        max: new Date(2027, 0, 1),
        start: new Date(1979, 0, 1),
        end: new Date(2027, 0, 1),
        zoomMin: 1000 * 60 * 60 * 24 * 365 * 2,   // min 2 years
        zoomMax: 1000 * 60 * 60 * 24 * 365 * 50,   // max 50 years
        margin: { item: 12 },
        orientation: 'bottom',
        showTooltips: true,
        tooltip: {
            followMouse: true,
            overflowMethod: 'flip'
        }
    };

    timeline = new vis.Timeline(container, allItems, options);

    timeline.on('select', function(properties) {
        if (properties.items.length > 0) {
            showDetails(properties.items[0]);
        } else {
            hideDetails();
        }
    });
}

function buildTooltip(event) {
    return '<strong>' + event.content + '</strong><br/>' +
           '<em>' + event.start.substring(0, 4) + '</em><br/>' +
           event.description.substring(0, 150) + '...';
}

function showDetails(itemId) {
    const event = rawData.find(e => e.id === itemId);
    if (!event) return;

    const panel = document.getElementById('event-details');
    const year = event.start.substring(0, 4);

    panel.innerHTML =
        '<h3>' + year + ': ' + event.content +
        ' <span class="category-badge ' + event.category + '">' +
        event.category + '</span></h3>' +
        '<div class="detail-row"><span class="detail-label">Description:</span> ' +
        event.description + '</div>' +
        '<div class="detail-row"><span class="detail-label">What was claimed:</span> ' +
        event.claimed + '</div>' +
        '<div class="detail-row"><span class="detail-label">What actually happened:</span> ' +
        event.outcome + '</div>' +
        '<div class="detail-row"><span class="detail-label">Prediction made:</span> ' +
        event.prediction + '</div>';

    panel.classList.add('visible');
}

function hideDetails() {
    const panel = document.getElementById('event-details');
    panel.classList.remove('visible');
}

function initFilters() {
    const buttons = document.querySelectorAll('.filter-controls button');

    // Set "All" as active initially
    document.querySelector('button[data-category="all"]').classList.add('active');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;

            // Update active states
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            if (category === 'all') {
                const items = rawData.map(event => ({
                    id: event.id,
                    content: event.content,
                    start: event.start,
                    className: event.category,
                    title: buildTooltip(event)
                }));
                allItems.clear();
                allItems.add(items);
            } else {
                const filtered = rawData
                    .filter(event => event.category === category)
                    .map(event => ({
                        id: event.id,
                        content: event.content,
                        start: event.start,
                        className: event.category,
                        title: buildTooltip(event)
                    }));
                allItems.clear();
                allItems.add(filtered);
            }

            hideDetails();
            timeline.fit();
        });
    });
}
