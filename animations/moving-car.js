noStroke();

// position of the car
var x = 10;
    
draw = function() {
    
    // all lines of code inside here will be run repeatedly
    background(16, 57, 224);
    
    // draw the car body
    fill(240, 158, 17);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
    x = x + 1;
    // if you want car to move faster, add greater number to x.
};
