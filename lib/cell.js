(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(row, col, ctx) {
    this.row = row;
    this.col = col;
    this.ctx = ctx;
    this.color = "#EEEEEE";
    this.filled = false;
  };

  Cell.cellSize = 20;
  Cell.cellSpacing = 3;
  Cell.boardX = 50;
  Cell.boardY = 50;

  Cell.prototype.render = function() {
    var start_x = this.col * Cell.cellSize + Cell.cellSpacing * this.col + Cell.boardX;
    var start_y = this.row * Cell.cellSize + Cell.cellSpacing * this.row + Cell.boardY;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(start_x, start_y, Cell.cellSize, Cell.cellSize);
  }
})();
