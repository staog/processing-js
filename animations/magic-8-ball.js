fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 50, 350, 280, 50, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer === 1) {
    fill(255, 0, 0);
    textSize(20);
    text("I can reach the sun!", 104, 229); 
} else if (answer === 2) {
    fill(247, 0, 255);
    textSize(20);
    text("How do you do!", 124, 229);
} else if (answer === 3) {
    fill(0, 221, 255);
    textSize(20);
    text("Look at me!", 141, 229);
} else if (answer === 4) {
    fill(0, 255, 34);
    textSize(20);
    text("Jump some more!", 114, 229);
} else {
    fill(255, 196, 0);
    textSize(20);
    text("Feels so alive!", 128, 229);
}

