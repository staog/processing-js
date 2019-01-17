/* Made a few changes:
   1. Changed original scene
   2. Replaced grass with spikes that can take life
   3. Added spikes to the top edge
   3. Replaced sticks with baloons
   4. Replaced main caracter
   5. Made it a bit slower
   6. Added number of lifes
   7. Added win scenario screen
   8. Added game over conditional and screen
*/

var Robot = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("avatars/robot_male_3");
    this.balloons = 0;
    this.lives = 3;
};

Robot.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 10, height - 90);
    image(this.img, this.x, this.y, 40, 40);
};

Robot.prototype.hop = function() {
    this.img = getImage("avatars/robot_male_2");
    this.y -= 3;
};

Robot.prototype.fall = function() {
    this.img = getImage("avatars/robot_male_1");
    this.y += 4;
};

Robot.prototype.checkForBallonPop = function(bln) {
    if ((bln.x >= this.x && bln.x <= (this.x + 40)) &&
        (bln.y >= this.y && bln.y <= (this.y + 40))) {
        bln.y = -400;
        this.balloons++;
    }
};

var Balloon = function(x, y) {
    this.x = x;
    this.y = y;
};

Balloon.prototype.draw = function() {
    fill(245, 139, 10);
    rectMode(CENTER);
    ellipse(this.x, this.y, 25, 30);
};

var youWin = function() {
        fill(238, 245, 24);
        rect(0, 0, width * 2, height * 2);
        fill(10, 10, 10);
        textSize(36);
        text("YOU WIN!!!", 100, 200);
        };

var gameOver = function() {
            fill(255, 0, 0);
            rect(0, 0, width * 2, height * 2);
            textSize(40);
            fill(0, 0, 0);
            text("GAME OVER", 80, 160);
        };

var robot = new Robot(100, 100);

var balloons = [];
for (var i = 0; i < 40; i++) {
    balloons.push(new Balloon(i * 40 + 300, random(50, 280)));
}

var spikes = [];
for (var i = 0; i < 25; i++) {
    spikes.push(i*20);
}

draw = function() {

    // static
    background(31, 173, 209);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);

    for (var i = 0; i < spikes.length; i++) {
        image(getImage("cute/RampWest"), spikes[i], height*0.81, 20, 70);
        spikes[i] -= 1;
        if (spikes[i] <= -20) {
            spikes[i] = width;
        }
    }
    
    for (var i = 0; i < spikes.length; i++) {
        image(getImage("cute/RampWest"), spikes[i], height*-0.09, 20, 60);
        spikes[i] -= 1;
        if (spikes[i] <= -20) {
            spikes[i] = width;
        }
    }

    for (var i = 0; i < balloons.length; i++) {
        balloons[i].draw();
        robot.checkForBallonPop(balloons[i]);
        balloons[i].x -= 1;
    }

    textSize(18);
    fill(10, 10, 10);
    text("Score: " + robot.balloons, 20, 50);
    text("Lives: " + robot.lives, 310, 50);

    if (robot.balloons/balloons.length >= 0.90) {
        return youWin();
    }

    if (keyIsPressed && keyCode === 0) {
        robot.hop();
    } else {
        robot.fall();
    }
    
    if (robot.y < 8 || robot.y > 313 && robot.lives > 0) {
        fill(8, 8, 8);
        rect(0, 0, width * 2, height * 2);
        fill(255, 0, 0);
        textSize(36);
        text("Ooouuch...", 100, 150);
        text("That hurts!", 90, 200);
        robot.img = getImage("avatars/robot_female_1");
        robot.lives -= 1;
        robot.x = 100;
        robot.y = 100;
    }
    else if (robot.lives === 0) {
        return gameOver(); 
    }
    
    robot.draw();
};

