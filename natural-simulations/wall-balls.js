var Ball = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.color = color(random(255), random(255), random(255), 127);
};
  
Ball.prototype.applyForce = function(force) {
  var f = PVector.div(force, this.mass);
  this.acceleration.add(f);
};
  
Ball.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Ball.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(this.color);
  ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

Ball.prototype.calculateWallForce = function() {
    
    var forceX = 0;
    var forceY = 0;
    
    if (this.position.x > width) {
        forceX = -1;    
    } 
    else if (this.position.x < 0) {
        forceX = 1;
    }
        if (this.position.y > height) {
        forceY = -1;
    } else if (this.position.y < 0) {
        forceY = 1;
        
    }
    return new PVector(forceX, forceY);
};

var balls = [];

for (var i = 0; i < 20; i++) {
    balls[i] = new Ball(random(0.1, 5), 0, 0);
}

var draw = function() {
  background(255, 255, 255);
  
  for (var i = 0; i < balls.length; i++) {
    var wind = new PVector(0.01, 0);
    var gravity = new PVector(0, 0.1);
    balls[i].applyForce(wind);
    balls[i].applyForce(gravity);
    balls[i].applyForce(balls[i].calculateWallForce());
    balls[i].update();
    balls[i].display();
  }
};
