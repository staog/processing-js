var games = [
  {
    title: "GT 5",
    stars: 5,
    publisher: "Sony",
    recommended: true,
    color: 228
  },
  {
    title: "GT 6",
    stars: 5,
    publisher: "Sony",
    recommended: true,
    color: 190
  },
  {
    title: "Fifa 17",
    stars: 4,
    publisher: "EA Games",
    recommended: true,
    color: 120
  },
  {
    title: "Tekken 6",
    stars: 5,
    publisher: "Namco",
    recommended: true,
    color: 144
  },
  {
    title: "Shift",
    stars: 4,
    publisher: "EA Games",
    recommended: true,
    color: 94
  },
  {
    title: "F1 2014",
    stars: 3,
    publisher: "EA Games",
    recommended: true,
    color: 191
  },
  {
    title: "NFS",
    stars: 3,
    publisher: "EA Games",
    recommended: true,
    color: 201
  },
  {
    title: "WE 2018",
    stars: 5,
    publisher: "Konami",
    recommended: true,
    color: 251
  },
  {
    title: "GTA5",
    stars: 5,
    publisher: "EA Games",
    recommended: true,
    color: 169
  }
];

// draw shelfs
for (var i = 0; i < 3; i++) {
  fill(173, 117, 33);
  rect(0, 120 + i * 120, width, 10);
}

// draw books
for (var i = 0; i < games.length; i++) {
  fill(games[i].color);
  if (i < 3) {
    rect(10 + i * 120, 20, 100, 100);
    fill(0, 0, 0);
    text(games[i].title, 15 + i * 120, 30, 70, 100);
    text(games[i].publisher, 15 + i * 120, 45, 70, 100);
    for (var j = 0; j < games[i].stars; j++) {
      image(getImage("cute/Star"), i * 120 + (10 + j * 20) , 90, 20, 30);
    }
  } else if (i < 6) {
      rect(10 + (i - 3) * 120 , 140, 100, 100);
      fill(0, 0, 0);
      text(games[i].title, 15 + (i - 3) * 120, 150, 70, 100);
      text(games[i].publisher, 15 + (i - 3) * 120, 165, 70, 100);
      for (var j = 0; j < games[i].stars; j++) {
        image(getImage("cute/Star"), (i - 3) * 120 + (10 + j * 20) , 210, 20, 30);
      }
    } else if (i < 9) {
        rect(10 + (i - 6) * 120, 260, 100, 100);
        fill(0, 0, 0);
        text(games[i].title, 15 + (i -6) * 120, 270, 70, 100);
        text(games[i].publisher, 15 + (i -6) * 120, 285, 70, 100);
        for (var j = 0; j < games[i].stars; j++) {
          image(getImage("cute/Star"), (i - 6) * 120 + (10 + j * 20) , 330, 20, 30);
        }
      }
}
