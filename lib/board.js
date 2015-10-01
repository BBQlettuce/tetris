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
    for (var col = 0; col < 10; col++) {
      var colArray = [];
      for (var row = 0; row < 20; row++) {
        cell = new Tetris.Cell(col, row, this.ctx);
        colArray.push(cell);
        cell.render();
        // this.cells.push(cell);
      }
      this.cells.push(colArray);
    }
  };

  Board.prototype.clearRows = function() {
    
  }
  // Board.prototype.draw = function(ctx) {
  //   ctx.rect(100, 100, Board.boardSize, Board.boardSize * 2);
  //   // ctx.lineWidth = 5;
  //   ctx.stroke();
  // }
})();
