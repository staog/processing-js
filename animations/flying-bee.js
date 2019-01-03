var bodyX = 120;
var bodyY = 280;
var bodyW = 60;
var bodyH = 60;

draw = function() {
    // grass
    background(149, 235, 44);
    
    // flowers
    fill(255, 0, 0);
    ellipse(335, 300, 50, 50);
    ellipse(265, 300, 50, 50);
    ellipse(300, 265, 50, 50);
    ellipse(300, 335, 50, 50);
    fill(247, 242, 242);
    ellipse(300, 300, 50, 50);
    
    fill(255, 0, 0);
    ellipse(135, 100, 50, 50);
    ellipse(65, 100, 50, 50);
    ellipse(100, 65, 50, 50);
    ellipse(100, 135, 50, 50);
    fill(247, 242, 242);
    ellipse(100, 100, 50, 50);
    
    fill(240, 209, 36);
    ellipse(bodyX, bodyY - 45, bodyW, bodyH); // head
    ellipse(bodyX, bodyY + 50, bodyW * 1.2, bodyH * 1.5); // body1
    ellipse(bodyX, bodyY, bodyW, bodyH); // body2
    fill(247, 242, 247);
    ellipse(bodyX - 70, bodyY - 20, bodyW + 40, bodyH - 20);
    ellipse(bodyX - 70, bodyY + 20, bodyW + 40, bodyH - 20);
    ellipse(bodyX + 70, bodyY - 20, bodyW + 40, bodyH - 20);
    ellipse(bodyX + 70, bodyY + 20, bodyW + 40, bodyH - 20);
    noFill();
    strokeWeight(2);
    arc(bodyX, bodyY + 2, 100, 100, 48, 132);
    arc(bodyX, bodyY + 12, 100, 100, 46, 136);
    arc(bodyX, bodyY + 24, 100, 100, 47, 134);
    line(bodyX -20, bodyY - 70, bodyX - 40, bodyY - 90);
    line(bodyX + 20, bodyY - 70, bodyX + 40, bodyY - 90);
    
    bodyY -= 1.4;
    bodyX += 1;
};
