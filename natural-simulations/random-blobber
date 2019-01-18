var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, 3, 3);
};

// Randomly move right, left, down, or up
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x += 2;
    } else if (choice === 1) {
        //move left
        this.x -= 2;
    } else if (choice === 2) {
        //move down
        this.y += 2;
    } else {
        //move up
        this.y -= 2;
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
