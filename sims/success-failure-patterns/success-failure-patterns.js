// Technology Success Pattern Analysis - Grouped Horizontal Bar Chart
// Compares successful technologies, failed technologies, and quantum computing
// across six key criteria.

const criteria = [
    "Early Practical Demonstration",
    "Continuous Improvement Pathway",
    "Intermediate Commercial Products",
    "Scalable Manufacturing",
    "Clear Customer Demand",
    "Favorable Scaling Physics"
];

// Tooltip explanations for each criterion per series
const explanations = {
    success: [
        "Transistors, integrated circuits, and the internet all had working demos early on.",
        "Moore's Law and networking effects drove steady, measurable improvement.",
        "Products shipped at every stage: radios, PCs, email, e-commerce.",
        "Semiconductor fabs and fiber optics scaled reliably with investment.",
        "Businesses and consumers adopted each generation eagerly.",
        "Physics favored miniaturization and photonic transmission."
    ],
    failed: [
        "Fusion and flying cars had limited or contested early demos.",
        "Decades passed with no sustained improvement trend.",
        "No intermediate commercial products reached the market.",
        "Manufacturing at scale was never demonstrated.",
        "Demand existed only in theory or was aspirational.",
        "Fundamental physics created barriers to scaling."
    ],
    qc: [
        "Small quantum demos exist but lack practical problem-solving.",
        "Qubit counts grow but error rates have not consistently improved.",
        "No commercial quantum product outperforms classical alternatives.",
        "No scalable manufacturing process for fault-tolerant qubits exists.",
        "Most proposed applications lack proven quantum advantage.",
        "Decoherence and error correction overhead resist scaling."
    ]
};

const datasets = [
    {
        label: "Successful Technologies (Avg)",
        data: [8.2, 8.8, 7.8, 8.6, 8.4, 8.6],
        backgroundColor: "rgba(56, 142, 60, 0.85)",
        borderColor: "#2E7D32",
        borderWidth: 1
    },
    {
        label: "Failed Technologies (Avg)",
        data: [3.7, 1.0, 0.7, 0.3, 6.7, 0.3],
        backgroundColor: "rgba(229, 57, 53, 0.85)",
        borderColor: "#C62828",
        borderWidth: 1
    },
    {
        label: "Quantum Computing",
        data: [4, 1, 0, 0, 3, 0],
        backgroundColor: "rgba(255, 112, 67, 0.85)",
        borderColor: "#E64A19",
        borderWidth: 1
    }
];

let showGapAnalysis = false;

// Custom plugin to draw gap arrows between QC and success average
const gapPlugin = {
    id: "gapArrows",
    afterDatasetsDraw(chart) {
        if (!showGapAnalysis) return;

        const successMeta = chart.getDatasetMeta(0);
        const qcMeta = chart.getDatasetMeta(2);

        // Only draw if both datasets are visible
        if (successMeta.hidden || qcMeta.hidden) return;

        const ctx = chart.ctx;
        ctx.save();

        for (let i = 0; i < criteria.length; i++) {
            const successBar = successMeta.data[i];
            const qcBar = qcMeta.data[i];

            if (!successBar || !qcBar) continue;

            const successEnd = successBar.x;
            const qcEnd = qcBar.x;
            const yMid = (successBar.y + qcBar.y) / 2;

            const gap = datasets[0].data[i] - datasets[2].data[i];
            if (gap <= 0) continue;

            // Draw arrow line
            ctx.beginPath();
            ctx.strokeStyle = "#3F51B5";
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 3]);
            ctx.moveTo(qcEnd, yMid);
            ctx.lineTo(successEnd, yMid);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw arrowhead
            ctx.beginPath();
            ctx.fillStyle = "#3F51B5";
            ctx.moveTo(successEnd, yMid);
            ctx.lineTo(successEnd - 6, yMid - 4);
            ctx.lineTo(successEnd - 6, yMid + 4);
            ctx.closePath();
            ctx.fill();

            // Draw gap label
            const labelX = (qcEnd + successEnd) / 2;
            ctx.fillStyle = "#3F51B5";
            ctx.font = "bold 11px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillText("-" + gap.toFixed(1), labelX, yMid - 5);

            ctx.restore();
            ctx.save();
        }

        ctx.restore();
    }
};

const ctx = document.getElementById("patternChart").getContext("2d");

const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: criteria,
        datasets: datasets
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: "Score (0-10)",
                    font: { size: 13, weight: "bold" }
                },
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: "rgba(0,0,0,0.08)"
                }
            },
            y: {
                ticks: {
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: { size: 12 },
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                    padding: 15
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const dsIndex = context.datasetIndex;
                        const critIndex = context.dataIndex;
                        const score = context.parsed.x;
                        const seriesName = context.dataset.label;

                        let explKey = dsIndex === 0 ? "success" : dsIndex === 1 ? "failed" : "qc";
                        let explanation = explanations[explKey][critIndex];

                        return [
                            seriesName + ": " + score + "/10",
                            explanation
                        ];
                    }
                },
                titleFont: { size: 13 },
                bodyFont: { size: 12 },
                maxWidth: 320,
                padding: 10
            }
        }
    },
    plugins: [gapPlugin]
});

// Toggle buttons
document.querySelectorAll(".toggle-btn[data-index]").forEach(function(btn) {
    btn.addEventListener("click", function() {
        const idx = parseInt(this.dataset.index);
        const meta = chart.getDatasetMeta(idx);
        meta.hidden = !meta.hidden;
        this.classList.toggle("active");
        chart.update();
    });
});

// Gap analysis button
document.getElementById("btn-gap").addEventListener("click", function() {
    showGapAnalysis = !showGapAnalysis;
    this.classList.toggle("active");
    chart.update();
});
