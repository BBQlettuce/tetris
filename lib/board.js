(function() {
  window.Tetris = window.Tetris || {};

  var Board = Tetris.Board = function(ctx) {
    this.ctx = ctx;
    this.cells = [];
    this.initializeCells();
  };

  Board.cornerX = 100;
  Board.cornerY = 100;

  Board.prototype.initializeCells = function() {
    this.ctx.clearRect(0, 0, 800, 600);
    for (var row = 0; row < 20; row++) {
      var rowArray = [];
      for (var col = 0; col < 10; col++) {
        cell = new Tetris.Cell(row, col, this.ctx);
        rowArray.push(cell);
        cell.render();
        // this.cells.push(cell);
      }
      this.cells.push(rowArray);
    }
  };

  Board.prototype.rows = function() {

  },

  Board.prototype.clearRows = function() {

  }
  // Board.prototype.draw = function(ctx) {
  //   ctx.rect(100, 100, Board.boardSize, Board.boardSize * 2);
  //   // ctx.lineWidth = 5;
  //   ctx.stroke();
  // }
})();
