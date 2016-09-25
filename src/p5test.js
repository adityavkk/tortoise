/* eslint no-undef: 0 */

function setup() {
  createCanvas(640, 640);
  background(0);
  fill(255, 255, 0);
  translate(300, 300);
}

function draw() {
  // ellipse(mouseX, mouseY, 9, 9);
  drawGrid();
  fill(255, 0, 0);
  triangle(Xrot(300, 300, PI), Yrot(300, 300, PI), Xrot(200, 400, PI), Yrot(200, 400, PI), Xrot(400, 400, PI), Yrot(400, 400, PI));
}

setTimeout(function() {
  triangle()
})

function Xrot(x, y, theta) {
  let res = x * cos(theta) + y * sin(theta);
  return res;
}

function Yrot(x, y, theta) {
  return -x * sin(theta) + y * cos(theta);
}

function drawGrid() {
  stroke(200);
  fill(120);
  for (var x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (var y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    text(y, 1, y + 12);
  }
}
