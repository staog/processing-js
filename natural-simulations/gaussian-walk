var generator = new Random(1);
var standardDeviation = 2;
var mean = 0;

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var num1 = generator.nextGaussian();
    var num2 = generator.nextGaussian();
    var xStepSize = standardDeviation * num1 + mean;
    var yStepSize = standardDeviation * num2 + mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
