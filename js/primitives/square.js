class Square {
  constructor(point, size, color, outline) {
    this.point = point;
    this.size = size;
    this.color = color;
    this.outline = outline;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.point.x - this.size / 2,
      this.point.y - this.size / 2,
      this.size,
      this.size
    );
  }
}
