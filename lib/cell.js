(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(col, row, ctx, color) {
    this.col = col;
    this.row = row;
    this.ctx = ctx;
    this.color = color || "#EEEEEE";
    this.filled = false;
  };

  Cell.cellSize = 20;
  Cell.cellSpacing = 3;
  Cell.boardX = 100;
  Cell.boardY = 100;

  Cell.prototype.render = function() {
    var start_x = this.col * Cell.cellSize + Cell.cellSpacing * this.col + Cell.boardX;
    var start_y = this.row * Cell.cellSize + Cell.cellSpacing * this.row + Cell.boardY;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(start_x, start_y, Cell.cellSize, Cell.cellSize);
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = "#FFFFFF"
    // ctx.stroke();
    // ctx.fill();
  }
})();
