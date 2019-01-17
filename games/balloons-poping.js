/* Made a few changes:
   1. Changed original scene
   2. Replaced sticks with baloons
   3. Replaced main caracter
   4. Made it a bit slower
   5.  
*/

var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/mr-pants");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 10, height - 90);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() { 
    this.img = getImage("avatars/mr-pants");
    this.y -= 3;
};

Beaver.prototype.fall = function() {
    this.img = getImage("avatars/mr-pants-with-hat");
    this.y += 4;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    fill(245, 139, 10);
    rectMode(CENTER);
    ellipse(this.x, this.y, 25, 30);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static
    background(37, 58, 59);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.81, 20, 44);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);
    
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};
