// QC Investment vs. Revenue (2015-2025) — Chart.js bar+line combo chart
(function () {
    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

    // Annual investment in $B
    const investmentData = [0.5, 0.8, 1.2, 1.5, 2.0, 2.5, 3.5, 5.0, 7.0, 8.5, 10.0];

    // Annual revenue in $B
    const revenueData = [0.01, 0.02, 0.03, 0.05, 0.08, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5];

    const cumInvestment = investmentData.reduce((a, b) => a + b, 0);
    const cumRevenue = revenueData.reduce((a, b) => a + b, 0);
    const roi = ((cumRevenue - cumInvestment) / cumInvestment * 100).toFixed(1);

    const ctx = document.getElementById('investmentChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Annual Investment ($B)',
                    data: investmentData,
                    backgroundColor: 'rgba(255, 112, 67, 0.75)',
                    borderColor: 'rgba(255, 112, 67, 1)',
                    borderWidth: 1,
                    yAxisID: 'y',
                    order: 2
                },
                {
                    label: 'Annual Revenue ($B)',
                    data: revenueData,
                    type: 'line',
                    borderColor: 'rgba(56, 142, 60, 1)',
                    backgroundColor: 'rgba(56, 142, 60, 0.15)',
                    borderWidth: 3,
                    pointBackgroundColor: 'rgba(56, 142, 60, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'y1',
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: true,
                    text: [
                        'The Massive Gap Between Investment and Revenue',
                        'Cumulative investment: ~$' + cumInvestment.toFixed(1) + 'B  |  Cumulative revenue: ~$' + cumRevenue.toFixed(2) + 'B'
                    ],
                    font: { size: 14 },
                    color: '#555',
                    padding: { bottom: 12 }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var label = context.dataset.label || '';
                            if (label) label += ': ';
                            label += '$' + context.parsed.y.toFixed(2) + 'B';
                            return label;
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 16,
                        font: { size: 13 }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: { size: 13, weight: 'bold' }
                    },
                    grid: { display: false }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Investment ($B)',
                        font: { size: 13, weight: 'bold' },
                        color: 'rgba(255, 112, 67, 1)'
                    },
                    ticks: {
                        color: 'rgba(255, 112, 67, 1)',
                        callback: function (value) { return '$' + value + 'B'; }
                    },
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.06)' }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Revenue ($B)',
                        font: { size: 13, weight: 'bold' },
                        color: 'rgba(56, 142, 60, 1)'
                    },
                    ticks: {
                        color: 'rgba(56, 142, 60, 1)',
                        callback: function (value) { return '$' + value.toFixed(2) + 'B'; }
                    },
                    beginAtZero: true,
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });

    // ROI calculation text
    var roiDiv = document.getElementById('roi-text');
    roiDiv.innerHTML =
        'Cumulative Investment (2015-2025): <strong>~$' + cumInvestment.toFixed(1) + 'B</strong> &nbsp;|&nbsp; ' +
        'Cumulative Revenue: <strong>~$' + cumRevenue.toFixed(2) + 'B</strong> &nbsp;|&nbsp; ' +
        'Return on Investment: <strong>' + roi + '%</strong>';
})();
