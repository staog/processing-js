var xPositions = [107, 274, 186, 208, 231, 150, 326];
var yPositions = [41, 61, 200, 185, 170, 351, 309];

var drawStars = function() {
    background(9, 5, 59);
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

mouseClicked = function() {
   xPositions.push(mouseX);
   yPositions.push(mouseY);
   drawStars();
};

drawStars();
