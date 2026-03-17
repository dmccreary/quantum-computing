// Bias Compounding Cascade Simulator
// Shows how cognitive biases compound: each bias amplifies the next

// Standard template variables
let containerWidth;
let canvasWidth;
let drawHeight = 500;
let controlHeight = 80;
let canvasHeight;
let margin = 25;
let sliderLeftMargin = 160;
let defaultTextSize = 16;

// Sim-specific variables
let hypeSlider;
let startPauseButton;
let isRunning = false;

// Animation state
let animationStage = 0; // 0 = none shown, 1-5 = stages revealed
let animationProgress = 0; // 0-1 progress within current stage
let lastFrameTime = 0;

// Bias cascade data
let biases = [
    {
        name: "Anchoring Bias",
        description: "Initial hype claim\nsets the anchor",
        multiplier: 1.3,
        icon: "\u2693" // anchor
    },
    {
        name: "Authority Bias",
        description: "Endorsed by\nprestigious experts",
        multiplier: 1.5,
        icon: "\uD83C\uDF93" // graduation cap
    },
    {
        name: "Bandwagon Effect",
        description: "Everyone is\ninvesting now",
        multiplier: 1.4,
        icon: "\uD83D\uDCC8" // chart
    },
    {
        name: "Confirmation Bias",
        description: "Selective evidence\nfiltering",
        multiplier: 1.4,
        icon: "\uD83D\uDD0D" // magnifying glass
    },
    {
        name: "Sunk Cost Fallacy",
        description: "We can't\nstop now",
        multiplier: 1.6,
        icon: "\uD83D\uDCB0" // money bag
    }
];

function updateCanvasSize() {
    containerWidth = select('main').width;
    canvasWidth = containerWidth;
    canvasHeight = drawHeight + controlHeight;
}

function setup() {
    updateCanvasSize();
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));
    textFont('Arial');

    // Create slider
    hypeSlider = createSlider(50, 150, 100, 1);
    hypeSlider.parent(document.querySelector('main'));
    hypeSlider.position(sliderLeftMargin, drawHeight + 14);
    hypeSlider.size(canvasWidth - sliderLeftMargin - margin - 120, 20);

    // Create start/pause button
    startPauseButton = createButton('Start');
    startPauseButton.parent(document.querySelector('main'));
    startPauseButton.position(canvasWidth - margin - 100, drawHeight + 10);
    startPauseButton.size(90, 30);
    startPauseButton.mousePressed(toggleAnimation);
    startPauseButton.style('font-size', '14px');
    startPauseButton.style('cursor', 'pointer');
    startPauseButton.style('background-color', '#3F51B5');
    startPauseButton.style('color', 'white');
    startPauseButton.style('border', 'none');
    startPauseButton.style('border-radius', '4px');

    lastFrameTime = millis();
}

function toggleAnimation() {
    if (!isRunning) {
        // Start
        if (animationStage >= biases.length) {
            // Reset if finished
            animationStage = 0;
            animationProgress = 0;
        }
        isRunning = true;
        startPauseButton.html('Pause');
        loop();
    } else {
        // Pause
        isRunning = false;
        startPauseButton.html('Start');
    }
}

function getCompoundedValue(stageCount, basePercent) {
    let value = basePercent;
    for (let i = 0; i < stageCount; i++) {
        value *= biases[i].multiplier;
    }
    return value;
}

function lerpColor2(c1, c2, amt) {
    return lerpColor(color(c1), color(c2), amt);
}

function getStageColor(ratio) {
    // ratio: how amplified (1.0 = no change, higher = more extreme)
    // Yellow (mild) to orange to red (extreme)
    if (ratio < 2.0) {
        let t = (ratio - 1.0) / 1.0;
        return lerpColor2('#FFD54F', '#FF9800', constrain(t, 0, 1));
    } else {
        let t = (ratio - 2.0) / 2.0;
        return lerpColor2('#FF9800', '#D32F2F', constrain(t, 0, 1));
    }
}

function draw() {
    let currentTime = millis();
    let dt = (currentTime - lastFrameTime) / 1000;
    lastFrameTime = currentTime;

    // Update animation
    if (isRunning && animationStage < biases.length) {
        animationProgress += dt * 1.2; // speed
        if (animationProgress >= 1) {
            animationProgress = 0;
            animationStage++;
            if (animationStage >= biases.length) {
                isRunning = false;
                startPauseButton.html('Restart');
            }
        }
    }

    let basePercent = hypeSlider.value();

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
    textSize(defaultTextSize + 2);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Bias Compounding Cascade", canvasWidth / 2, 10);

    // Subtitle
    textSize(12);
    textStyle(ITALIC);
    fill('#666');
    text("Each cognitive bias amplifies the next, compounding distortion", canvasWidth / 2, 34);

    // Layout for cascade boxes
    let numStages = biases.length;
    let totalStages = numStages + 1; // +1 for initial value box
    let boxSpacing = 8;
    let availableWidth = canvasWidth - 2 * margin;
    let boxWidth = min(130, (availableWidth - boxSpacing * totalStages) / totalStages);
    let totalBoxesWidth = totalStages * boxWidth + (totalStages - 1) * boxSpacing;
    let startX = (canvasWidth - totalBoxesWidth) / 2;

    let boxAreaTop = 60;
    let boxAreaBottom = drawHeight - 70;
    let maxBoxHeight = boxAreaBottom - boxAreaTop;

    // Calculate max compounded value for scaling
    let maxValue = getCompoundedValue(numStages, 150); // max possible
    let heightScale = maxBoxHeight / maxValue;

    // Minimum box height for readability
    let minBoxHeight = 80;

    // How many stages to show
    let visibleStages = animationStage;
    let partialStage = (isRunning && animationStage < biases.length) ? animationProgress : 0;

    // Draw initial value box
    let initHeight = max(minBoxHeight, basePercent * heightScale);
    let initX = startX;
    let initY = boxAreaBottom - initHeight;

    fill('#90CAF9');
    stroke('#1565C0');
    strokeWeight(2);
    rect(initX, initY, boxWidth, initHeight, 4);

    // Initial value text
    noStroke();
    fill('#1565C0');
    textSize(11);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Initial Hype", initX + boxWidth / 2, initY + 8);
    textStyle(NORMAL);
    text("Level", initX + boxWidth / 2, initY + 22);
    textSize(18);
    textStyle(BOLD);
    text(basePercent + "%", initX + boxWidth / 2, initY + 42);

    // Draw bias stages
    let prevValue = basePercent;
    let prevBoxRight = initX + boxWidth;

    for (let i = 0; i < numStages; i++) {
        let stageX = startX + (i + 1) * (boxWidth + boxSpacing);
        let currentValue;

        // Determine visibility and value
        let stageVisible = false;
        let stageAlpha = 255;

        if (i < visibleStages) {
            stageVisible = true;
            currentValue = getCompoundedValue(i + 1, basePercent);
        } else if (i === visibleStages && partialStage > 0) {
            stageVisible = true;
            stageAlpha = floor(partialStage * 255);
            let prevVal = getCompoundedValue(i, basePercent);
            let fullVal = getCompoundedValue(i + 1, basePercent);
            currentValue = lerp(prevVal, fullVal, partialStage);
        } else {
            // Not yet visible - draw placeholder
            currentValue = getCompoundedValue(i, basePercent); // same as previous
            let placeholderHeight = minBoxHeight;
            let placeholderY = boxAreaBottom - placeholderHeight;
            fill(220);
            stroke(190);
            strokeWeight(1);
            rect(stageX, placeholderY, boxWidth, placeholderHeight, 4);

            noStroke();
            fill(170);
            textSize(11);
            textAlign(CENTER, CENTER);
            textStyle(NORMAL);
            text("?", stageX + boxWidth / 2, placeholderY + placeholderHeight / 2);

            textSize(9);
            text(biases[i].name, stageX + boxWidth / 2, placeholderY + placeholderHeight / 2 + 18);

            prevBoxRight = stageX + boxWidth;
            continue;
        }

        if (!stageVisible) continue;

        let stageHeight = max(minBoxHeight, currentValue * heightScale);
        let stageY = boxAreaBottom - stageHeight;

        // Color based on amplification ratio
        let ratio = currentValue / basePercent;
        let stageColor = getStageColor(ratio);

        // Draw arrow from previous box to this one
        let arrowY = boxAreaBottom - max(minBoxHeight, getCompoundedValue(i, basePercent) * heightScale) / 2;
        let arrowStartX = prevBoxRight + 2;
        let arrowEndX = stageX - 2;
        let arrowMidX = (arrowStartX + arrowEndX) / 2;

        if (stageAlpha > 50) {
            push();
            stroke(0, 0, 0, min(stageAlpha, 150));
            strokeWeight(2);
            noFill();
            // Simple horizontal arrow
            let ay = boxAreaBottom - stageHeight / 2;
            line(arrowStartX, ay, arrowEndX - 6, ay);
            // Arrowhead
            fill(0, 0, 0, min(stageAlpha, 150));
            noStroke();
            triangle(arrowEndX, ay, arrowEndX - 8, ay - 4, arrowEndX - 8, ay + 4);
            pop();
        }

        // Draw stage box
        push();
        let sc = color(stageColor);
        let fillR = red(sc), fillG = green(sc), fillB = blue(sc);
        fill(fillR, fillG, fillB, stageAlpha);
        stroke(red(color('#333')), green(color('#333')), blue(color('#333')), stageAlpha);
        strokeWeight(2);
        rect(stageX, stageY, boxWidth, stageHeight, 4);
        pop();

        // Stage text
        noStroke();
        let textAlpha = stageAlpha;

        // Icon
        push();
        fill(0, 0, 0, textAlpha);
        textSize(20);
        textAlign(CENTER, TOP);
        textStyle(NORMAL);
        text(biases[i].icon, stageX + boxWidth / 2, stageY + 6);
        pop();

        // Bias name
        push();
        fill(0, 0, 0, textAlpha);
        textSize(10);
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        let nameLines = biases[i].name.split(' ');
        if (nameLines.length > 1) {
            text(biases[i].name, stageX + boxWidth / 2, stageY + 30);
        } else {
            text(biases[i].name, stageX + boxWidth / 2, stageY + 30);
        }
        pop();

        // Multiplier
        push();
        fill(180, 0, 0, textAlpha);
        textSize(13);
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        text("\u00D7" + biases[i].multiplier.toFixed(1), stageX + boxWidth / 2, stageY + 46);
        pop();

        // Running value
        push();
        fill(0, 0, 0, textAlpha);
        textSize(15);
        textAlign(CENTER, TOP);
        textStyle(BOLD);
        text(round(currentValue) + "%", stageX + boxWidth / 2, stageY + 64);
        pop();

        // Description
        if (stageHeight > 100) {
            push();
            fill(60, 60, 60, textAlpha);
            textSize(8);
            textAlign(CENTER, TOP);
            textStyle(NORMAL);
            let descLines = biases[i].description.split('\n');
            for (let d = 0; d < descLines.length; d++) {
                text(descLines[d], stageX + boxWidth / 2, stageY + 84 + d * 11);
            }
            pop();
        }

        prevValue = currentValue;
        prevBoxRight = stageX + boxWidth;
    }

    // Final compounded result display
    let finalValue = getCompoundedValue(visibleStages, basePercent);
    if (partialStage > 0 && animationStage < biases.length) {
        let prevVal = getCompoundedValue(animationStage, basePercent);
        let fullVal = getCompoundedValue(animationStage + 1, basePercent);
        finalValue = lerp(prevVal, fullVal, partialStage);
    }

    // Result bar at bottom of draw area
    let resultY = drawHeight - 55;
    let resultHeight = 48;
    fill(255, 255, 255, 220);
    stroke('#3F51B5');
    strokeWeight(2);
    rect(margin, resultY, canvasWidth - 2 * margin, resultHeight, 6);

    noStroke();
    fill('#333');
    textSize(14);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    let resultTextY = resultY + resultHeight / 2;
    text("Initial: " + basePercent + "%", margin + 15, resultTextY);

    // Compounded result
    textStyle(BOLD);
    let compoundedColor;
    if (finalValue > 300) {
        compoundedColor = '#D32F2F';
    } else if (finalValue > 200) {
        compoundedColor = '#E65100';
    } else {
        compoundedColor = '#F57F17';
    }
    fill(compoundedColor);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Compounded Belief: " + round(finalValue) + "%", canvasWidth / 2, resultTextY);

    // Amplification factor
    fill('#666');
    textSize(12);
    textStyle(NORMAL);
    textAlign(RIGHT, CENTER);
    let totalMultiplier = finalValue / basePercent;
    text("Total amplification: " + totalMultiplier.toFixed(1) + "\u00D7", canvasWidth - margin - 15, resultTextY);

    // Control area labels
    fill('#333');
    noStroke();
    textSize(13);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    text("Initial Hype Level:", 10, drawHeight + 24);

    // Slider value display
    textAlign(LEFT, CENTER);
    fill('#3F51B5');
    textStyle(BOLD);
    let sliderValX = sliderLeftMargin + hypeSlider.size().width + 8;
    text(basePercent + "%", sliderValX, drawHeight + 24);

    // Footer instructions
    fill('#888');
    textSize(11);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    text("Press Start to animate the cascade. Adjust the slider to change the initial hype level.", canvasWidth / 2, drawHeight + 58);

    if (!isRunning && animationStage >= biases.length) {
        // All stages shown, no need to keep looping
        // but we still want to respond to slider changes
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    hypeSlider.position(sliderLeftMargin, drawHeight + 14);
    hypeSlider.size(canvasWidth - sliderLeftMargin - margin - 120, 20);
    startPauseButton.position(canvasWidth - margin - 100, drawHeight + 10);
}
