var Attractor = function() {
    this.position = new PVector(width/2, height/2);
    this.mass = 20;
    this.G = 1;
};

Attractor.prototype.calculateAttraction = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);  
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

Attractor.prototype.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
};


var Mover = function(mass, x, y, color) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
    this.color = color;
};
  
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    noStroke();
    fill(this.color, 50);
    this.color = color(11,220, 33);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

var movers = [];
var attractor = new Attractor();

for (var i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height), color(random(0, 225), random(0, 225), random(0, 225)));
}

draw = function() {
    for (var i = 0; i < movers.length; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        movers[i].applyForce(force);

        movers[i].update();
        movers[i].display();
    }
};
