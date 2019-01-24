angleMode = "radians";
var angle = 0.1;

draw = function() {
    background(255);
    pushMatrix();
    translate(200, 200);
    rotate(angle);
    angle += 0.01;
    fill(127, 127, 127);
    stroke(0, 0, 0);
    line(-50, 0, 50, 0);
    strokeWeight(2);
    ellipse(-50, 0, 16, 16);
    ellipse(50, 0, 16, 16);
    popMatrix();
};
