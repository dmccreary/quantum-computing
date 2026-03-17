// QC Prediction Tracker Timeline
(function () {
    let allEvents = [];
    let timeline = null;
    let dataSet = null;
    let activeCategory = 'all';
    let activeSource = null;

    // Load timeline data and initialize
    fetch('timeline.json')
        .then(res => res.json())
        .then(data => {
            allEvents = data;
            initTimeline();
            initFilters();
        })
        .catch(err => {
            document.getElementById('timeline').innerHTML =
                '<p style="color:red;text-align:center;padding:20px;">Error loading timeline data.</p>';
            console.error('Failed to load timeline.json:', err);
        });

    function buildItems(events) {
        return events.map(e => ({
            id: e.id,
            content: e.content,
            start: e.start,
            className: e.category,
            title: e.prediction
        }));
    }

    function initTimeline() {
        const container = document.getElementById('timeline');
        dataSet = new vis.DataSet(buildItems(allEvents));

        const options = {
            height: '300px',
            min: '1998-01-01',
            max: '2036-01-01',
            start: '1998-01-01',
            end: '2036-01-01',
            zoomMin: 1000 * 60 * 60 * 24 * 365 * 2,   // 2 years
            zoomMax: 1000 * 60 * 60 * 24 * 365 * 40,   // 40 years
            margin: { item: 12 },
            orientation: 'top',
            selectable: true,
            tooltip: {
                followMouse: true,
                overflowMethod: 'cap'
            }
        };

        timeline = new vis.Timeline(container, dataSet, options);

        timeline.on('select', function (properties) {
            if (properties.items.length > 0) {
                const selectedId = properties.items[0];
                const event = allEvents.find(e => e.id === selectedId);
                if (event) showDetails(event);
            } else {
                clearDetails();
            }
        });
    }

    function showDetails(event) {
        const panel = document.getElementById('event-details');
        panel.classList.remove('empty');
        panel.innerHTML = `
            <h3>${event.content}
                <span class="category-badge category-${event.category}">${event.category}</span>
            </h3>
            <div class="detail-row">
                <span class="detail-label">Predicted by:</span> ${event.predictedBy} (${event.year})
            </div>
            <div class="detail-row">
                <span class="detail-label">Target year:</span> ${event.targetYear}
            </div>
            <div class="detail-row">
                <span class="detail-label">Prediction:</span> ${event.prediction}
            </div>
            <div class="detail-row">
                <span class="detail-label">Outcome:</span> ${event.outcome}
            </div>
        `;
    }

    function clearDetails() {
        const panel = document.getElementById('event-details');
        panel.classList.add('empty');
        panel.innerHTML = 'Click on any prediction to see details.';
    }

    function applyFilters() {
        let filtered = allEvents;

        if (activeCategory !== 'all') {
            filtered = filtered.filter(e => e.category === activeCategory);
        }

        if (activeSource) {
            filtered = filtered.filter(e => e.source === activeSource);
        }

        dataSet.clear();
        dataSet.add(buildItems(filtered));
        clearDetails();
    }

    function initFilters() {
        const categoryBtns = document.querySelectorAll('.filter-btn[data-filter]');
        const sourceBtns = document.querySelectorAll('.filter-btn[data-source]');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                activeCategory = this.getAttribute('data-filter');
                applyFilters();
            });
        });

        sourceBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    activeSource = null;
                } else {
                    sourceBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    activeSource = this.getAttribute('data-source');
                }
                applyFilters();
            });
        });
    }
})();
