function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill("#F2E0BD");
  strokeWeight(2);
  stroke(0);
  triangle(0,0,543,390,width,0);
  triangle(width,0,width,556,432,556);
  triangle(370,267,0,267,0,height);
  triangle(254,436,0,height,width,height);
  noFill();
  strokeWeight(30);
  stroke(255);
  rect(0,0,width,height);
}
