(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(col, row, color) {
    this.col = col;
    this.row = row;
    // this.ctx = ctx;
    this.color = color || "#FFFFFF";
  };

  Cell.cellSize = 20;
  Cell.boardX = 100;
  Cell.boardY = 100;

  Cell.prototype.render = function(ctx) {
    var start_x = this.col * Cell.cellSize + this.col + Cell.boardX;
    var start_y = this.row * Cell.cellSize + this.row + Cell.boardY;
    ctx.rect(start_x, start_y, Cell.cellSize, Cell.cellSize);
    // ctx.lineWidth = 1;
    ctx.fillStyle = this.color
    ctx.stroke();
    ctx.fill();
  }
})();
