(function() {
  window.Tetris = window.Tetris || {};

  var Board = Tetris.Board = function(ctx) {
    this.ctx = ctx;
    this.cells = [];
    this.initializeCells();
  };

  Board.prototype.initializeCells = function() {
    this.ctx.clearRect(0, 0, 800, 600);
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
        cell = new Tetris.Cell(row * Tetris.Cell.cellSize, col * Tetris.Cell.cellSize);
        cell.render(this.ctx)
        this.cells.push(cell);
      }
    }
  };

  // Board.prototype.draw = function(ctx) {
  //   ctx.rect(100, 100, Board.boardSize, Board.boardSize * 2);
  //   // ctx.lineWidth = 5;
  //   ctx.stroke();
  // }
})();
