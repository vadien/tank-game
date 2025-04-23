const canvas = document.getElementById("tankCanvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

const points = [];
const squares = [];

function drawGrid(cellWidth = 20, cellHeight = 20) {
  for (let i = 0; i <= canvas.width; i += cellWidth) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i <= canvas.height; i += cellHeight) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
}
drawGrid();

function createPoints(cellWidth = 20, cellHeight = 20) {
  for (let i = cellWidth / 2; i <= canvas.width; i += cellWidth) {
    for (let j = cellHeight / 2; j <= canvas.height; j += cellHeight) {
      points.push(new Point(j, i));
    }
  }
}

createPoints();
createSquares(points);

function drawAllPoints(points) {
  for (const point of points) {
    point.draw(ctx);
  }
}
drawAllPoints(points);

function createSquares(points) {
  for (const point of points) {
    squares.push(new Square(point, 20, "black", "red"));
  }
}

function drawAllSquares(squares) {
  console.log("drawing squares!");
  for (const square of squares) {
    square.draw(ctx);
  }
}

drawAllSquares(squares);
