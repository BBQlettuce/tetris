(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(row, col, ctx) {
    this.row = row;
    this.col = col;
    this.ctx = ctx;
    this.color = "#707070";
    this.filled = false;
  };

  Cell.cellSize = 16;
  Cell.cellSpacing = 3;
  // change these to use the dimension of the canvas
  Cell.boardX = 200 - 5*(Cell.cellSize + Cell.cellSpacing);
  Cell.boardY = 300 - 15*(Cell.cellSize + Cell.cellSpacing);
  // Cell.boardX = 50;
  // Cell.boardY = 50;

  Cell.prototype.render = function() {
    var startX = this.col * Cell.cellSize + Cell.cellSpacing * this.col + Cell.boardX;
    var startY = this.row * Cell.cellSize + Cell.cellSpacing * this.row + Cell.boardY;
    // this.ctx.rect(start_x, start_y, Cell.cellSize, Cell.cellSize);
    this.ctx.clearRect(startX - 1, startY - 1, Cell.cellSize + 2, Cell.cellSize + 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(startX, startY, Cell.cellSize, Cell.cellSize);
    // this.ctx.strokeStyle = "#000000";
    // this.ctx.lineWidth = 1;
    // this.ctx.fill();
    this.ctx.stroke();
  }
})();
