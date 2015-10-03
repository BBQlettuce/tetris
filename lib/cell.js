(function() {
  window.Tetris = window.Tetris || {};

  var Cell = Tetris.Cell = function(row, col, ctx) {
    this.row = row;
    this.col = col;
    this.ctx = ctx;
    this.color = "#707070";
    this.filled = false;
  };

  Cell.cellSize = 25;
  Cell.cellSpacing = 7;
  // change these to use the dimension of the canvas
  Cell.boardX = $(window).width()/2 - 5*(Cell.cellSize) - 6*(Cell.cellSpacing);
  Cell.boardY = $(window).height()/2 - 12*(Cell.cellSize + Cell.cellSpacing);
  // Cell.boardX = 50;
  // Cell.boardY = 50;

  Cell.prototype.render = function() {
    var start_x = this.col * Cell.cellSize + Cell.cellSpacing * this.col + Cell.boardX;
    var start_y = this.row * Cell.cellSize + Cell.cellSpacing * this.row + Cell.boardY;
    // this.ctx.rect(start_x, start_y, Cell.cellSize, Cell.cellSize);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(start_x, start_y, Cell.cellSize, Cell.cellSize);
    // this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 4;
    // this.ctx.fill();
    this.ctx.stroke();
  }
})();
