// Qubit State on the Bloch Sphere
// A p5.js MicroSim for visualizing qubit states on the Bloch sphere

// Standard template variables
let containerWidth;
let canvasWidth;
let drawHeight = 450;
let controlHeight = 100;
let canvasHeight;
let margin = 25;
let sliderLeftMargin = 160;
let defaultTextSize = 16;
const uiFontPath = 'assets/NotoSans-Regular.ttf';
const uiFontFallbackUrl = 'https://cdn.jsdelivr.net/gh/danmccreary/quantum-computing@main/docs/sims/bloch-sphere/assets/NotoSans-Regular.ttf';
let uiFont;
let fontFailed = false;

// Sliders
let thetaSlider;
let phiSlider;

// Buttons
let measureBtn;
let resetBtn;

// Orbit rotation state
let rotX = -0.4;
let rotY = 0.3;
let dragging = false;
let lastMouseX, lastMouseY;

// Measurement state
let measured = false;
let measuredState = 0; // 0 or 1
let measureCount0 = 0;
let measureCount1 = 0;
let measureAnimProgress = -1; // -1 means no animation

// Sphere sizing
let sphereRadius = 140;

function updateCanvasSize() {
    containerWidth = select('main').width;
    canvasWidth = containerWidth;
    canvasHeight = drawHeight + controlHeight;
}

function preload() {
    uiFont = loadFont(uiFontPath, () => {}, (err) => {
        console.warn('Local font load failed, falling back to CDN.', err);
        uiFont = loadFont(uiFontFallbackUrl, () => {}, (fallbackErr) => {
            console.error('Failed to load fallback font:', fallbackErr);
            fontFailed = true;
        });
    });
}

function setup() {
    updateCanvasSize();
    let canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent(document.querySelector('main'));

    // Create theta slider
    thetaSlider = createSlider(0, 314, 79); // 0 to PI*100, default PI/4*100
    thetaSlider.parent(document.querySelector('main'));
    thetaSlider.style('width', '180px');
    thetaSlider.input(onSliderChange);

    // Create phi slider
    phiSlider = createSlider(0, 628, 0); // 0 to 2*PI*100
    phiSlider.parent(document.querySelector('main'));
    phiSlider.style('width', '180px');
    phiSlider.input(onSliderChange);

    // Measure button
    measureBtn = createButton('Measure');
    measureBtn.parent(document.querySelector('main'));
    measureBtn.mousePressed(doMeasure);
    measureBtn.style('padding', '4px 14px');
    measureBtn.style('font-size', '14px');
    measureBtn.style('cursor', 'pointer');

    // Reset button
    resetBtn = createButton('Reset');
    resetBtn.parent(document.querySelector('main'));
    resetBtn.mousePressed(doReset);
    resetBtn.style('padding', '4px 14px');
    resetBtn.style('font-size', '14px');
    resetBtn.style('cursor', 'pointer');
    resetBtn.style('margin-left', '8px');

    positionControls();
    noLoop();
    redraw();
}

function positionControls() {
    let controlY = drawHeight + 12;
    thetaSlider.position(sliderLeftMargin, controlY);
    phiSlider.position(sliderLeftMargin, controlY + 32);

    let btnX = sliderLeftMargin + 200 + 200;
    measureBtn.position(btnX, controlY + 5);
    resetBtn.position(btnX + 80, controlY + 5);
}

function onSliderChange() {
    measured = false;
    measureAnimProgress = -1;
    redraw();
}

function doMeasure() {
    let theta = thetaSlider.value() / 100;
    let prob0 = cos(theta / 2) * cos(theta / 2);
    if (random() < prob0) {
        measuredState = 0;
        measureCount0++;
    } else {
        measuredState = 1;
        measureCount1++;
    }
    measured = true;
    measureAnimProgress = 0;
    // Animate collapse
    animateCollapse();
}

function animateCollapse() {
    if (measureAnimProgress < 1) {
        measureAnimProgress += 0.1;
        redraw();
        setTimeout(animateCollapse, 30);
    } else {
        measureAnimProgress = 1;
        redraw();
    }
}

function doReset() {
    thetaSlider.value(79);
    phiSlider.value(0);
    measured = false;
    measureAnimProgress = -1;
    measureCount0 = 0;
    measureCount1 = 0;
    redraw();
}

function draw() {
    if (!uiFont && !fontFailed) {
        background(255);
        return;
    }
    if (uiFont) {
        textFont(uiFont);
    }
    let theta = thetaSlider.value() / 100;
    let phi = phiSlider.value() / 100;

    // If measured and animating, interpolate toward measured pole
    let displayTheta = theta;
    let displayPhi = phi;
    if (measured && measureAnimProgress >= 0) {
        let targetTheta = measuredState === 0 ? 0 : PI;
        let t = constrain(measureAnimProgress, 0, 1);
        // Ease
        t = t * t * (3 - 2 * t);
        displayTheta = lerp(theta, targetTheta, t);
        displayPhi = lerp(phi, 0, t);
    }

    // --- Draw 2D background layers using screen-space overlay ---
    // We use the WEBGL camera but draw backgrounds first with push/pop

    // Clear
    background(255);

    // Draw 2D overlay for backgrounds
    push();
    // Reset camera to ortho screen space for 2D drawing
    let hw = canvasWidth / 2;
    let hh = canvasHeight / 2;
    ortho(-hw, hw, -hh, hh, -1000, 1000);
    resetMatrix();

    // Draw region background (aliceblue)
    fill(240, 248, 255);
    stroke(192);
    strokeWeight(1);
    rect(-hw, -hh, canvasWidth, drawHeight);

    // Control region background (white)
    fill(255);
    noStroke();
    rect(-hw, -hh + drawHeight, canvasWidth, controlHeight);

    // Title
    fill(51);
    noStroke();
    textSize(defaultTextSize + 2);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Qubit State on the Bloch Sphere", 0, -hh + 8);

    // Slider labels
    textSize(13);
    textStyle(NORMAL);
    textAlign(RIGHT, CENTER);
    fill(51);
    let controlY = -hh + drawHeight;
    text('\u03B8 (theta) = ' + nf(theta, 1, 2), -hw + sliderLeftMargin - 8, controlY + 18);
    text('\u03C6 (phi) = ' + nf(phi, 1, 2), -hw + sliderLeftMargin - 8, controlY + 50);

    // State info panel on the right side
    let infoX = hw - 260;
    let infoY = controlY + 8;
    textSize(13);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    fill(51);

    let cosHalf = cos(displayTheta / 2);
    let sinHalf = sin(displayTheta / 2);
    let prob0 = cosHalf * cosHalf;
    let prob1 = sinHalf * sinHalf;

    text('P(|0\u27E9) = ' + nf(prob0, 1, 4), infoX, infoY);
    text('P(|1\u27E9) = ' + nf(prob1, 1, 4), infoX, infoY + 18);

    // Measurement results
    if (measureCount0 + measureCount1 > 0) {
        let total = measureCount0 + measureCount1;
        textSize(12);
        fill(80);
        text('Measurements: |0\u27E9=' + measureCount0 + '  |1\u27E9=' + measureCount1 + '  (n=' + total + ')', infoX, infoY + 42);
        if (measured && measureAnimProgress >= 1) {
            fill(measuredState === 0 ? '#3F51B5' : '#FF7043');
            textStyle(BOLD);
            text('Result: |' + measuredState + '\u27E9', infoX, infoY + 60);
        }
    }

    // State equation at bottom of draw region
    textSize(14);
    textStyle(NORMAL);
    fill(51);
    textAlign(CENTER, BOTTOM);
    let eqY = -hh + drawHeight - 10;
    let alphaStr = nf(cosHalf, 1, 3);
    let betaStr = nf(sinHalf, 1, 3);
    let phiStr = nf(displayPhi, 1, 2);
    text('|\u03C8\u27E9 = ' + alphaStr + '|0\u27E9 + e^(i' + phiStr + ')' + betaStr + '|1\u27E9', 0, eqY);

    pop();

    // --- Draw 3D Bloch Sphere ---
    push();
    // Move sphere center up a bit so it's in the draw region
    translate(0, -30, 0);

    // Apply orbit rotation
    rotateX(rotX);
    rotateY(rotY);

    // Grid lines (latitude)
    stroke(210);
    strokeWeight(0.5);
    noFill();
    for (let lat = -60; lat <= 60; lat += 30) {
        let r = sphereRadius * cos(radians(lat));
        let y = sphereRadius * sin(radians(lat));
        push();
        translate(0, -y, 0);
        drawCircleXZ(r, 40);
        pop();
    }

    // Grid lines (longitude)
    for (let lon = 0; lon < 180; lon += 30) {
        push();
        rotateY(radians(lon));
        drawCircleXY(sphereRadius, 40);
        pop();
    }

    // Equator (thicker)
    stroke(180);
    strokeWeight(1);
    drawCircleXZ(sphereRadius, 60);

    // Prime meridian
    drawCircleXY(sphereRadius, 60);

    // Axes
    strokeWeight(1.5);
    // Z axis (vertical: |0> to |1>)
    stroke(100);
    line(0, -sphereRadius - 20, 0, 0, sphereRadius + 20, 0);
    // X axis
    stroke(100);
    line(-sphereRadius - 20, 0, 0, sphereRadius + 20, 0, 0);
    // Y axis
    stroke(100);
    line(0, 0, -sphereRadius - 20, 0, 0, sphereRadius + 20);

    // Axis labels (use billboard text)
    fill(51);
    noStroke();
    textSize(14);
    textStyle(BOLD);

    // |0> at top (negative Y in p5 WEBGL)
    push();
    translate(0, -sphereRadius - 30, 0);
    applyBillboard();
    text('|0\u27E9', 0, 0);
    pop();

    // |1> at bottom
    push();
    translate(0, sphereRadius + 30, 0);
    applyBillboard();
    text('|1\u27E9', 0, 0);
    pop();

    // |+> on positive X
    push();
    translate(sphereRadius + 25, 0, 0);
    applyBillboard();
    textSize(13);
    text('|+\u27E9', 0, 0);
    pop();

    // |-> on negative X
    push();
    translate(-sphereRadius - 25, 0, 0);
    applyBillboard();
    textSize(13);
    text('|-\u27E9', 0, 0);
    pop();

    // |+i> on positive Z
    push();
    translate(0, 0, sphereRadius + 25);
    applyBillboard();
    textSize(13);
    text('|+i\u27E9', 0, 0);
    pop();

    // |-i> on negative Z
    push();
    translate(0, 0, -sphereRadius - 25);
    applyBillboard();
    textSize(13);
    text('|-i\u27E9', 0, 0);
    pop();

    // State vector arrow
    // Bloch sphere coords: x = sin(theta)*cos(phi), y = -cos(theta), z = sin(theta)*sin(phi)
    let sx = sphereRadius * sin(displayTheta) * cos(displayPhi);
    let sy = -sphereRadius * cos(displayTheta);
    let sz = sphereRadius * sin(displayTheta) * sin(displayPhi);

    // Draw state vector
    stroke('#FF7043');
    strokeWeight(3);
    line(0, 0, 0, sx, sy, sz);

    // Arrowhead (small sphere at tip)
    push();
    translate(sx, sy, sz);
    noStroke();
    fill('#FF7043');
    sphere(5);
    pop();

    // Projection shadow on XZ plane (equatorial plane, y=0)
    stroke(200, 150, 100, 120);
    strokeWeight(1);
    drawDashedLine3D(sx, sy, sz, sx, 0, sz);
    drawDashedLine3D(0, 0, 0, sx, 0, sz);

    pop();
}

// Draw a circle in the XZ plane (horizontal)
function drawCircleXZ(r, segments) {
    beginShape();
    for (let i = 0; i <= segments; i++) {
        let angle = (TWO_PI / segments) * i;
        vertex(r * cos(angle), 0, r * sin(angle));
    }
    endShape();
}

// Draw a circle in the XY plane (vertical, facing Z)
function drawCircleXY(r, segments) {
    beginShape();
    for (let i = 0; i <= segments; i++) {
        let angle = (TWO_PI / segments) * i;
        vertex(r * cos(angle), r * sin(angle), 0);
    }
    endShape();
}

// Billboard: remove rotation so text always faces camera
function applyBillboard() {
    // Get the inverse of the current rotation to face camera
    // Simple approach: counter-rotate by the orbit angles
    rotateY(-rotY);
    rotateX(-rotX);
    textAlign(CENTER, CENTER);
}

function drawDashedLine3D(ax, ay, az, bx, by, bz, dashLength = 8, gapLength = 4) {
    let dir = createVector(bx - ax, by - ay, bz - az);
    let totalLen = dir.mag();
    if (totalLen === 0) {
        return;
    }
    dir.normalize();
    let traveled = 0;
    while (traveled < totalLen) {
        let startVec = createVector(
            ax + dir.x * traveled,
            ay + dir.y * traveled,
            az + dir.z * traveled
        );
        let dash = min(dashLength, totalLen - traveled);
        let endVec = createVector(
            startVec.x + dir.x * dash,
            startVec.y + dir.y * dash,
            startVec.z + dir.z * dash
        );
        line(startVec.x, startVec.y, startVec.z, endVec.x, endVec.y, endVec.z);
        traveled += dash + gapLength;
    }
}

// Mouse drag for orbit control
function mousePressed() {
    // Only handle drag in the draw region
    if (mouseY < drawHeight && mouseY > 0 && mouseX > 0 && mouseX < canvasWidth) {
        dragging = true;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    }
}

function mouseDragged() {
    if (dragging) {
        let dx = mouseX - lastMouseX;
        let dy = mouseY - lastMouseY;
        rotY += dx * 0.01;
        rotX += dy * 0.01;
        // Clamp rotX
        rotX = constrain(rotX, -HALF_PI, HALF_PI);
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        redraw();
    }
}

function mouseReleased() {
    dragging = false;
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    positionControls();
    redraw();
}
