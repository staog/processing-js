var xCoordinates = [random(1, 100), random(100, 200), random(200, 300), random(300, 400)];
var yCoordinates = [0, 0, 0, 0];

draw = function() {
    background(172, 246, 247);
    fill(252, 252, 252);
    for(var i = 0; i < xCoordinates.length; i++) {
        ellipse(xCoordinates[i], yCoordinates[i], 9, 9);
        yCoordinates[i] += 1.8;
        xCoordinates[i] -= 0.6;
        if (yCoordinates[i] > 360 && xCoordinates[i] < 1) {
          yCoordinates[i] = 0;
          xCoordinates[i] = random(1, 400);
        }
    }
    fill(247, 242, 242);
    noStroke();
    rect(-1, 350, 401, 400);
    ellipse(100, 324, 100, 100);
    ellipse(100, 260, 75, 75);
    ellipse(100, 204, 55, 55);
    fill(13, 12, 12);
    ellipse(90, 200, 5, 5);
    ellipse(110, 200, 5, 5);
    ellipse(100, 250, 5, 5);
    ellipse(100, 268, 5, 5);
    ellipse(100, 285, 5, 5);
        fill(255, 0, 0);
    triangle(94, 206, 101, 217, 109, 206);
};

mouseClicked = function () {
    xCoordinates.push(mouseX);
    yCoordinates.push(mouseY);
    draw();
};
