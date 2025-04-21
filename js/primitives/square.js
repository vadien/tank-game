class Square {
  constructor(point, size, color, outline) {
    this.point = point;
    this.size = size;
    this.color = color;
    this.outline = outline;
  }

  draw(ctx, point) {
    ctx.fillRect(point.x, point.y, this.size, this.size);
  }
}
