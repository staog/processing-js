noStroke();

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 300;

draw = function() {
    background(123, 255, 0);
  
    fill(255, 234, 0);
    ellipse(x, y, ballWidth, ballHeight);
    
    // increascing x by 1
    x += 1;
    // decreasing y by 3
    y -= 3;
    // decreasing size of the ball by 1%, both width and height
    ballWidth *= 99/100;
    ballHeight *= 99/100;
    
};
