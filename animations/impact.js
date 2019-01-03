var xPos = 10;
var yPos = 10;
var aPos = 400;
var bPos = 400;
var initSize = 20;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos - 11, yPos - 6, 10, 10);
    ellipse(xPos - 7, yPos - 17, 10, 10);
    fill(255, 183, 0);
    ellipse(aPos, bPos, initSize, initSize);
    
    xPos += 1;
    yPos += 1;
    initSize += 2;
};
