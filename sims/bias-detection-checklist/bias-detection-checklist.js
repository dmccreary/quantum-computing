// Bias Detection Checklist
// An interactive checklist tool for detecting cognitive biases in quantum computing claims

// Standard template variables
let containerWidth;
let canvasWidth;
let drawHeight = 550;
let controlHeight = 50;
let canvasHeight;
let margin = 25;
let sliderLeftMargin = 160;
let defaultTextSize = 16;

// Checklist items
let checkItems = [
    { question: "Does the claim cite peer-reviewed evidence?", bias: "Authority Bias", checked: false, inverted: true },
    { question: "Is there an unfalsifiable timeline? ('just 5-10 more years')", bias: "Anchoring Bias", checked: false, inverted: false },
    { question: "Are failures/limitations mentioned?", bias: "Confirmation Bias", checked: false, inverted: true },
    { question: "Is the comparison baseline stated?", bias: "Framing Bias", checked: false, inverted: true },
    { question: "Does it conflate theoretical and demonstrated results?", bias: "Equivocation", checked: false, inverted: false },
    { question: "Are financial conflicts of interest disclosed?", bias: "Incentive Bias", checked: false, inverted: true },
    { question: "Would you invest your own money based on this evidence?", bias: "Skin in the Game", checked: false, inverted: true },
    { question: "Has the goalposts shifted from prior claims?", bias: "Moving Goalposts", checked: false, inverted: false }
];

let resetButton;

function updateCanvasSize() {
    containerWidth = document.querySelector('main').offsetWidth;
    canvasWidth = containerWidth;
    canvasHeight = drawHeight + controlHeight;
}

function setup() {
    updateCanvasSize();
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));

    resetButton = createButton('Reset');
    resetButton.parent(document.querySelector('main'));
    resetButton.position(canvasWidth / 2 - 40, drawHeight + 10);
    resetButton.size(80, 30);
    resetButton.style('font-size', '14px');
    resetButton.style('cursor', 'pointer');
    resetButton.style('border', '1px solid #999');
    resetButton.style('border-radius', '4px');
    resetButton.style('background', '#f0f0f0');
    resetButton.mousePressed(resetChecklist);

    noLoop();
}

function resetChecklist() {
    for (let i = 0; i < checkItems.length; i++) {
        checkItems[i].checked = false;
    }
    redraw();
}

function getRiskScore() {
    let score = 0;
    for (let i = 0; i < checkItems.length; i++) {
        let item = checkItems[i];
        // For inverted items (absence = red flag): checked means NO red flag
        // For non-inverted items (presence = red flag): checked means red flag detected
        if (item.inverted) {
            if (!item.checked) score++;
        } else {
            if (item.checked) score++;
        }
    }
    return score;
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
    text("Bias Detection Checklist", canvasWidth / 2, margin / 2);

    // Subtitle
    fill('#666');
    textSize(12);
    textStyle(ITALIC);
    textAlign(CENTER, TOP);
    text("Click each statement to evaluate a quantum computing claim", canvasWidth / 2, margin / 2 + 24);

    // Layout calculations
    let checklistLeft = margin;
    let checklistTop = 60;
    let itemHeight = 52;
    let checkboxSize = 20;
    let meterLeft = canvasWidth - 180;
    let meterWidth = 40;
    let meterTop = checklistTop + 20;
    let meterHeight = checkItems.length * itemHeight - 40;
    let checklistRight = meterLeft - 30;

    // Draw checklist items
    for (let i = 0; i < checkItems.length; i++) {
        let item = checkItems[i];
        let y = checklistTop + i * itemHeight;

        // Checkbox
        let cbX = checklistLeft + 10;
        let cbY = y + 6;

        stroke('#666');
        strokeWeight(1.5);
        if (item.checked) {
            fill('#3F51B5');
        } else {
            fill('white');
        }
        rect(cbX, cbY, checkboxSize, checkboxSize, 3);

        // Checkmark
        if (item.checked) {
            stroke('white');
            strokeWeight(2.5);
            noFill();
            line(cbX + 4, cbY + 10, cbX + 8, cbY + 15);
            line(cbX + 8, cbY + 15, cbX + 16, cbY + 5);
        }

        // Question text
        fill('#333');
        noStroke();
        textSize(14);
        textAlign(LEFT, TOP);
        textStyle(NORMAL);
        let maxTextW = checklistRight - (cbX + checkboxSize + 12);
        text(item.question, cbX + checkboxSize + 10, cbY, maxTextW, itemHeight - 10);

        // Bias label
        fill('#FF7043');
        textSize(11);
        textStyle(ITALIC);
        text("(" + item.bias + ")", cbX + checkboxSize + 10, cbY + 24);

        // Separator line
        if (i < checkItems.length - 1) {
            stroke('#ddd');
            strokeWeight(0.5);
            line(checklistLeft + 10, y + itemHeight - 2, checklistRight, y + itemHeight - 2);
        }
    }

    // Bias Risk Score meter
    let score = getRiskScore();
    let scoreRatio = score / checkItems.length;

    // Meter label
    fill('#333');
    noStroke();
    textSize(14);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Bias Risk", meterLeft + meterWidth / 2 + 30, meterTop - 18);
    text("Score", meterLeft + meterWidth / 2 + 30, meterTop - 4);

    // Meter background
    let meterX = meterLeft + 30 + meterWidth / 2 - meterWidth / 2;
    stroke('#ccc');
    strokeWeight(1);
    fill('#eee');
    rect(meterX, meterTop + 20, meterWidth, meterHeight, 4);

    // Color gradient fill for meter
    let fillHeight = scoreRatio * meterHeight;
    let meterColor;
    if (score <= 2) {
        meterColor = color('#4CAF50');
    } else if (score <= 5) {
        meterColor = color('#FFC107');
    } else {
        meterColor = color('#F44336');
    }

    noStroke();
    fill(meterColor);
    rect(meterX + 2, meterTop + 20 + meterHeight - fillHeight, meterWidth - 4, fillHeight, 0, 0, 3, 3);

    // Score number
    fill('#333');
    noStroke();
    textSize(28);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text(score, meterX + meterWidth / 2, meterTop + 20 + meterHeight + 30);

    textSize(12);
    textStyle(NORMAL);
    fill('#666');
    text("out of " + checkItems.length, meterX + meterWidth / 2, meterTop + 20 + meterHeight + 50);

    // Risk level label
    let riskLabel, riskColor;
    if (score <= 2) {
        riskLabel = "Low Risk";
        riskColor = '#4CAF50';
    } else if (score <= 5) {
        riskLabel = "Moderate Risk";
        riskColor = '#FF9800';
    } else {
        riskLabel = "High Risk";
        riskColor = '#F44336';
    }

    fill(riskColor);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(riskLabel, meterX + meterWidth / 2, meterTop + 20 + meterHeight + 72);

    // Scale labels on meter
    fill('#999');
    textSize(9);
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
    text("0", meterX + meterWidth + 6, meterTop + 20 + meterHeight);
    text(checkItems.length, meterX + meterWidth + 6, meterTop + 20);

    // Legend at bottom of draw area
    let legendY = drawHeight - 30;
    textSize(11);
    textAlign(CENTER, CENTER);
    noStroke();

    fill('#4CAF50');
    rect(canvasWidth / 2 - 200, legendY - 6, 12, 12, 2);
    fill('#666');
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
    text("0-2: Low Risk", canvasWidth / 2 - 184, legendY);

    fill('#FFC107');
    rect(canvasWidth / 2 - 70, legendY - 6, 12, 12, 2);
    fill('#666');
    text("3-5: Moderate", canvasWidth / 2 - 54, legendY);

    fill('#F44336');
    rect(canvasWidth / 2 + 60, legendY - 6, 12, 12, 2);
    fill('#666');
    text("6-8: High Risk", canvasWidth / 2 + 76, legendY);

    // Position reset button
    resetButton.position(canvasWidth / 2 - 40, drawHeight + 10);
}

function mousePressed() {
    let checklistLeft = margin;
    let checklistTop = 60;
    let itemHeight = 52;
    let checkboxSize = 20;

    for (let i = 0; i < checkItems.length; i++) {
        let y = checklistTop + i * itemHeight;
        let cbX = checklistLeft + 10;
        let cbY = y + 6;

        // Check if click is on the checkbox or its text row
        if (mouseX >= cbX && mouseX <= cbX + canvasWidth - 220 &&
            mouseY >= cbY - 2 && mouseY <= cbY + itemHeight - 10) {
            checkItems[i].checked = !checkItems[i].checked;
            redraw();
            return;
        }
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    redraw();
}
