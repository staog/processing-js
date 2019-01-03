var watchSize = 150;
var changeAngle = 360;
var circleSize = 570;

draw = function() {
    fill(12, 13, 13);
    ellipse(200, 200, width, height);
    fill(240, 235, 228);
    textSize(40);
    text("New G-Shock", 65, 95);
    fill(250, 247, 247);
    textSize(20);
    text("Indestructible!", 125, 130);
    textSize(15);
    text("Casio. Technology for life.", 105, 250);
    noStroke();
    fill(237, 9, 24);
    arc(200, 200, watchSize, watchSize, changeAngle, changeAngle);
    fill(250, 250, 250);
    ellipse(200, 200, circleSize, circleSize);
    
    circleSize -= 1.7;
    watchSize += 1;
    changeAngle += 0.8;
};
