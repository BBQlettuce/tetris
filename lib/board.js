(function() {
  window.Tetris = window.Tetris || {};

  var Board = Tetris.Board = function(ctx) {
    this.ctx = ctx;
  };

  Board.boardSize = 200;

  Board.prototype.initializeCells = function() {
    this.ctx.clearRect(0, 0, 800, 600);
    this.draw(this.ctx);
  };

  Board.prototype.draw = function(ctx) {
    ctx.rect(100, 100, Board.boardSize, Board.boardSize * 2);
    // ctx.lineWidth = 5;
    ctx.stroke();
  }
})();
