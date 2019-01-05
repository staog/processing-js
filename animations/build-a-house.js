background(219, 255, 255);

// roof
fill(240, 19, 63);
triangle(200, 15, 375, 180, 25, 180);

// wall
fill(242, 238, 111);
rect(60, 179, 280, 166);

// door
fill(26, 25, 23);
rect(80, 249, 51, 96);

// window
fill(179, 235, 235);
for (var i = 150; i < 300; i += 60) {
    rect(i, 230, 40, 60);
}

var grass = getImage("cute/GrassBlock");
var x = 0;

while (x < 400) {
  image(grass, x, 294);
  x += 100;
}

x = 201;

var tree = getImage("cute/TreeUgly");
image(tree, x, 244);

