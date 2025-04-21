const canvas = document.getElementById("tankCanvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");

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

function drawCenterPoint(cellWidth = 20, cellHeight = 20) {
  for (let i = cellWidth / 2; i <= canvas.width; i += cellWidth) {
    for (let j = cellHeight / 2; j <= canvas.height; j += cellHeight) {
      ctx.fillRect(j, i, 1, 1);
    }
  }
}

drawCenterPoint();
