(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(x, y, color) {
    this.x = x;
    this.y = y;
    // this.ctx = ctx;
    this.color = color || undefined;
  };

  Cell.cellSize = 20;

  Cell.prototype.render = function(ctx) {
    ctx.rect(this.x, this.y, Cell.cellSize, Cell.cellSize);
    ctx.lineWidth = 1;
    ctx.stroke();
  }
})();
