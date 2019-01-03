draw = function() {
    stroke(153, 73, 73);
    fill(mouseX, mouseY, mouseX - mouseY);
    ellipse(mouseX, mouseY, mouseX, mouseY);
};
