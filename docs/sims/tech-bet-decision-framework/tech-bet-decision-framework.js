// Technology Bet Decision Framework
// An interactive scoring matrix for evaluating emerging technology bets

// Standard template variables
let containerWidth;
let canvasWidth;
let drawHeight = 500;
let controlHeight = 80;
let canvasHeight;
let margin = 25;
let sliderLeftMargin = 200;
let defaultTextSize = 16;

// Criteria definitions
let criteria = [
    {
        label: "Physical feasibility demonstrated?",
        low: "Theoretical only",
        high: "Proven at scale",
        score: 0
    },
    {
        label: "Clear scaling path exists?",
        low: "Unknown",
        high: "Demonstrated",
        score: 0
    },
    {
        label: "Economic advantage over alternatives?",
        low: "None",
        high: "Clear advantage",
        score: 0
    },
    {
        label: "Working prototypes solve real problems?",
        low: "Toy demos only",
        high: "Commercial use",
        score: 0
    },
    {
        label: "Improvement trajectory is consistent?",
        low: "Stalled",
        high: "Accelerating",
        score: 0
    },
    {
        label: "Independent verification of claims?",
        low: "None",
        high: "Widely replicated",
        score: 0
    }
];

// Preset data
let presets = {
    transistor: {
        name: "Transistor (1950s)",
        scores: [5, 5, 5, 4, 5, 4]
    },
    qc: {
        name: "Quantum Computing (2025)",
        scores: [2, 1, 1, 1, 1, 2]
    }
};

// Buttons
let resetBtn, transistorBtn, qcBtn;

function updateCanvasSize() {
    containerWidth = document.querySelector('main').offsetWidth;
    canvasWidth = containerWidth;
    canvasHeight = drawHeight + controlHeight;
}

function setup() {
    updateCanvasSize();
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));

    // Create control buttons
    let btnY = drawHeight + 15;
    let btnStyle = function(btn) {
        btn.parent('main');
        btn.style('font-size', '13px');
        btn.style('cursor', 'pointer');
        btn.style('border', '1px solid #999');
        btn.style('border-radius', '4px');
        btn.style('background', '#f0f0f0');
        btn.style('padding', '6px 14px');
    };

    resetBtn = createButton('Reset');
    btnStyle(resetBtn);
    resetBtn.mousePressed(resetScores);

    transistorBtn = createButton('Transistor (1950s)');
    btnStyle(transistorBtn);
    transistorBtn.style('background', '#E8F5E9');
    transistorBtn.style('border-color', '#4CAF50');
    transistorBtn.mousePressed(function() { loadPreset('transistor'); });

    qcBtn = createButton('QC (2025)');
    btnStyle(qcBtn);
    qcBtn.style('background', '#FFEBEE');
    qcBtn.style('border-color', '#F44336');
    qcBtn.mousePressed(function() { loadPreset('qc'); });

    noLoop();
}

function resetScores() {
    for (let i = 0; i < criteria.length; i++) {
        criteria[i].score = 0;
    }
    redraw();
}

function loadPreset(key) {
    let preset = presets[key];
    for (let i = 0; i < criteria.length; i++) {
        criteria[i].score = preset.scores[i];
    }
    redraw();
}

function getTotalScore() {
    let total = 0;
    for (let i = 0; i < criteria.length; i++) {
        total += criteria[i].score;
    }
    return total;
}

function getVerdict(score) {
    if (score >= 25) return { text: "Strong bet", color: '#4CAF50' };
    if (score >= 18) return { text: "Moderate bet - proceed with caution", color: '#FFC107' };
    if (score >= 10) return { text: "Weak bet - high risk", color: '#FF9800' };
    return { text: "Do not bet", color: '#F44336' };
}

function getRowY(i) {
    return 80 + i * 62;
}

function draw() {
    // Draw region background
    fill('aliceblue');
    stroke('silver');
    strokeWeight(1);
    rect(0, 0, canvasWidth, drawHeight);

    // Control region background
    fill('white');
    noStroke();
    rect(0, drawHeight, canvasWidth, controlHeight);

    // Title
    fill('#333');
    noStroke();
    textSize(defaultTextSize + 4);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Technology Bet Decision Framework", canvasWidth / 2, 10);

    // Subtitle
    fill('#666');
    textSize(12);
    textStyle(ITALIC);
    text("Score each criterion 1-5 to evaluate a technology investment", canvasWidth / 2, 34);

    // Layout
    let leftCol = margin;
    let scoreBtnStartX = canvasWidth * 0.52;
    let rightPanelX = canvasWidth * 0.78;
    let rightPanelW = canvasWidth * 0.22 - margin;
    let btnSize = 30;
    let btnGap = 6;

    // Column headers
    textSize(12);
    textStyle(BOLD);
    fill('#3F51B5');
    textAlign(LEFT, CENTER);
    text("Criterion", leftCol, 62);
    textAlign(CENTER, CENTER);
    text("Score (1-5)", scoreBtnStartX + 2 * (btnSize + btnGap), 62);

    // Draw criteria rows
    for (let i = 0; i < criteria.length; i++) {
        let y = getRowY(i);
        let item = criteria[i];

        // Alternating row background
        if (i % 2 === 0) {
            noStroke();
            fill(240, 244, 255, 120);
            rect(leftCol - 5, y - 8, rightPanelX - leftCol - 5, 56, 4);
        }

        // Criterion label
        fill('#333');
        noStroke();
        textSize(14);
        textAlign(LEFT, TOP);
        textStyle(NORMAL);
        let maxLabelW = scoreBtnStartX - leftCol - 20;
        text(item.label, leftCol, y);

        // Scale hints
        fill('#999');
        textSize(10);
        textStyle(ITALIC);
        text("1=" + item.low + "  5=" + item.high, leftCol, y + 20);

        // Score buttons (1-5)
        for (let s = 1; s <= 5; s++) {
            let bx = scoreBtnStartX + (s - 1) * (btnSize + btnGap);
            let by = y + 2;

            // Button background
            stroke('#aaa');
            strokeWeight(1);
            if (item.score === s) {
                fill('#3F51B5');
            } else {
                fill('white');
            }
            rect(bx, by, btnSize, btnSize, 5);

            // Button label
            if (item.score === s) {
                fill('white');
            } else {
                fill('#333');
            }
            noStroke();
            textSize(14);
            textAlign(CENTER, CENTER);
            textStyle(BOLD);
            text(s, bx + btnSize / 2, by + btnSize / 2);
        }

        // Row separator
        if (i < criteria.length - 1) {
            stroke('#ddd');
            strokeWeight(0.5);
            line(leftCol, y + 50, rightPanelX - 15, y + 50);
        }
    }

    // Right panel - score summary
    let panelY = 56;
    let panelH = drawHeight - panelY - 20;

    stroke('#3F51B5');
    strokeWeight(2);
    fill(245, 247, 255);
    rect(rightPanelX - 10, panelY, rightPanelW + 10, panelH, 8);

    let total = getTotalScore();
    let verdict = getVerdict(total);
    let panelCenterX = rightPanelX - 10 + (rightPanelW + 10) / 2;

    // Panel title
    fill('#3F51B5');
    noStroke();
    textSize(14);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Total Score", panelCenterX, panelY + 15);

    // Score display
    textSize(48);
    fill(total > 0 ? verdict.color : '#999');
    textAlign(CENTER, CENTER);
    text(total, panelCenterX, panelY + 70);

    // Out of 30
    fill('#666');
    textSize(14);
    textStyle(NORMAL);
    text("out of 30", panelCenterX, panelY + 100);

    // Score bar
    let barX = rightPanelX + 5;
    let barW = rightPanelW - 20;
    let barY = panelY + 125;
    let barH = 16;

    // Bar background with gradient zones
    noStroke();
    let zoneW = barW / 4;
    fill('#F44336');
    rect(barX, barY, zoneW, barH, 4, 0, 0, 4);
    fill('#FF9800');
    rect(barX + zoneW, barY, zoneW, barH);
    fill('#FFC107');
    rect(barX + 2 * zoneW, barY, zoneW, barH);
    fill('#4CAF50');
    rect(barX + 3 * zoneW, barY, zoneW, barH, 0, 4, 4, 0);

    // Score indicator
    if (total > 0) {
        let indicatorX = barX + (total / 30) * barW;
        fill('#333');
        noStroke();
        triangle(indicatorX - 5, barY - 4, indicatorX + 5, barY - 4, indicatorX, barY + 2);
        triangle(indicatorX - 5, barY + barH + 4, indicatorX + 5, barY + barH + 4, indicatorX, barY + barH - 2);
    }

    // Bar labels
    fill('#999');
    textSize(8);
    textStyle(NORMAL);
    textAlign(CENTER, TOP);
    text("0", barX, barY + barH + 4);
    text("10", barX + zoneW, barY + barH + 4);
    text("18", barX + 2 * zoneW, barY + barH + 4);
    text("25", barX + 3 * zoneW, barY + barH + 4);
    text("30", barX + barW, barY + barH + 4);

    // Verdict
    let verdictY = panelY + 175;
    if (total > 0) {
        // Verdict background
        fill(verdict.color);
        noStroke();
        rect(rightPanelX - 5, verdictY - 5, rightPanelW + 5, 46, 6);

        fill('white');
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER, TOP);
        text("Verdict:", panelCenterX, verdictY + 2);
        textSize(12);
        textStyle(NORMAL);
        text(verdict.text, panelCenterX, verdictY + 20);
    } else {
        fill('#bbb');
        textSize(13);
        textStyle(ITALIC);
        textAlign(CENTER, CENTER);
        text("Score criteria", panelCenterX, verdictY + 12);
        text("to see verdict", panelCenterX, verdictY + 28);
    }

    // Individual criterion scores in panel
    let detailY = verdictY + 60;
    fill('#3F51B5');
    textSize(11);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("Breakdown", panelCenterX, detailY);

    detailY += 18;
    for (let i = 0; i < criteria.length; i++) {
        let dy = detailY + i * 28;
        let score = criteria[i].score;

        // Mini bar
        let miniBarX = rightPanelX;
        let miniBarW = rightPanelW - 20;
        let miniBarH = 10;

        fill('#eee');
        noStroke();
        rect(miniBarX, dy + 14, miniBarW, miniBarH, 3);

        if (score > 0) {
            let barColor;
            if (score >= 4) barColor = '#4CAF50';
            else if (score >= 3) barColor = '#FFC107';
            else barColor = '#F44336';
            fill(barColor);
            rect(miniBarX, dy + 14, miniBarW * (score / 5), miniBarH, 3);
        }

        // Label
        fill('#555');
        textSize(9);
        textStyle(NORMAL);
        textAlign(LEFT, TOP);
        // Truncate label
        let shortLabel = criteria[i].label;
        if (shortLabel.length > 28) shortLabel = shortLabel.substring(0, 26) + "...";
        text(shortLabel + (score > 0 ? " (" + score + ")" : ""), miniBarX, dy + 2);
    }

    // Position control buttons
    let totalBtnW = 100 + 150 + 100 + 30;
    let btnStartX = (canvasWidth - totalBtnW) / 2;
    resetBtn.position(btnStartX, drawHeight + 25);
    transistorBtn.position(btnStartX + 115, drawHeight + 25);
    qcBtn.position(btnStartX + 280, drawHeight + 25);
}

function mousePressed() {
    let btnSize = 30;
    let btnGap = 6;
    let scoreBtnStartX = canvasWidth * 0.52;

    for (let i = 0; i < criteria.length; i++) {
        let y = getRowY(i);

        for (let s = 1; s <= 5; s++) {
            let bx = scoreBtnStartX + (s - 1) * (btnSize + btnGap);
            let by = y + 2;

            if (mouseX >= bx && mouseX <= bx + btnSize &&
                mouseY >= by && mouseY <= by + btnSize) {
                // Toggle: clicking same score deselects it
                if (criteria[i].score === s) {
                    criteria[i].score = 0;
                } else {
                    criteria[i].score = s;
                }
                redraw();
                return;
            }
        }
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    redraw();
}
