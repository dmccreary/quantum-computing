document.addEventListener('DOMContentLoaded', function () {

    const categoryColors = {
        milestone:  { bg: '#1976D2', border: '#0D47A1' },
        prediction: { bg: '#FF7043', border: '#E65100' },
        reality:    { bg: '#C62828', border: '#8E0000' }
    };

    const statusLabels = {
        failed:  'FAILED',
        pending: 'PENDING'
    };

    let allItems = [];
    let timeline = null;

    fetch('timeline.json')
        .then(r => r.json())
        .then(data => {
            allItems = data.map(d => {
                const statusText = d.status ? ` [${statusLabels[d.status] || d.status.toUpperCase()}]` : '';
                return {
                    id: d.id,
                    content: d.content,
                    start: d.start,
                    className: d.category,
                    title: d.content + statusText + ': ' + (d.notes || ''),
                    _category: d.category,
                    _notes: d.notes || '',
                    _status: d.status || null
                };
            });
            initTimeline(allItems);
            setupFilters();
        })
        .catch(err => {
            document.getElementById('event-details').textContent = 'Error loading timeline data: ' + err.message;
        });

    function initTimeline(items) {
        const container = document.getElementById('timeline');
        const dataSet = new vis.DataSet(items);

        const options = {
            width: '100%',
            height: '100%',
            margin: { item: 12 },
            orientation: { axis: 'bottom' },
            zoomMin: 1000 * 60 * 60 * 24 * 365 * 2,   // 2 years
            zoomMax: 1000 * 60 * 60 * 24 * 365 * 40,   // 40 years
            min: new Date(1990, 0, 1),
            max: new Date(2030, 0, 1),
            start: new Date(1992, 0, 1),
            end: new Date(2027, 0, 1),
            showTooltips: true,
            tooltip: {
                followMouse: true,
                overflowMethod: 'cap'
            },
            stack: true,
            horizontalScroll: true,
            zoomKey: 'ctrlKey'
        };

        timeline = new vis.Timeline(container, dataSet, options);

        timeline.on('select', function (properties) {
            if (properties.items.length === 0) {
                showDefaultDetails();
                return;
            }
            const itemId = properties.items[0];
            const item = items.find(i => i.id === itemId);
            if (item) showDetails(item);
        });
    }

    function showDetails(item) {
        const panel = document.getElementById('event-details');
        const year = new Date(item.start).getFullYear();

        let statusHtml = '';
        if (item._status) {
            statusHtml = `<span class="detail-status ${item._status}">${statusLabels[item._status] || item._status.toUpperCase()}</span>`;
        }

        panel.innerHTML =
            `<div class="detail-title">${year}: ${item.content}</div>` +
            `<span class="detail-category ${item._category}">${item._category}</span>` +
            statusHtml +
            `<div class="detail-notes">${item._notes}</div>`;
    }

    function showDefaultDetails() {
        document.getElementById('event-details').innerHTML = 'Click an event for details. Scroll to zoom, drag to pan.';
    }

    function setupFilters() {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const cat = this.getAttribute('data-category');
                const filtered = cat === 'all'
                    ? allItems
                    : allItems.filter(i => i._category === cat);

                timeline.setItems(new vis.DataSet(filtered));
                showDefaultDetails();
            });
        });
        // Set "All" as active by default
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    }
});
