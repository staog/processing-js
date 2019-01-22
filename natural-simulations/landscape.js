fill(5, 5, 5);
rect(0, 0, 400, 400);

var drawStars = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);
        if (r2 > probability) {
            return r1;
        }
    }
};

for (var i = 0; i < 6; i++) {
    var num = drawStars() * 5;
    var radius = num*2;
    fill(240, 233, 96);
    ellipse(num*69, num*11, radius, radius);
}

var drawMoon = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);
        if (r2 < probability) {
            return r1;
        }
    }
};

// Generate 10 random numbers and size ellipses based on them
for (var i = 0; i < 1; i++) {
    var num = drawMoon() * 5;
    var radius = num*34;
    fill(209, 207, 175);
    ellipse(num*69, num*24, radius, radius);
}

var drawCity = function() {
    var incAmount = 0.12;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height);
        rect(t*50, height-y, -21, y);
    }
};

var drawLand = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/6);
        rect(t*105, height-y, 40, y);
    }
};

fill(163, 153, 153);
drawCity();
fill(0, 255, 9);
drawLand();
