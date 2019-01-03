fill(255, 0, 255);

draw = function() {
    var position = "  " + mouseX + ", " + mouseY;
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12);
    text(position, mouseX, mouseY);
};

