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

  Board.prototype.clearRows = function() {
    var needsClearing = true;
    while (needsClearing) {
      needsClearing = false;
      for (var rowNum = 19; rowNum > 0; rowNum--) {
        var row = this.cells[rowNum];
        if (_.every(row, function(cell) {
          return cell.filled
        })) {
          needsClearing = true;
          // does the clearing
          this.shiftRowsDown(rowNum);
          console.log("cleared something")
        }
      }
    }
    console.log("done clearing");
  };

  Board.prototype.clearRow = function(rowNum) {
    var row = this.cells[rowNum];
    row.forEach(function(cell) {
      cell.filled = false;
      cell.color = "#EEEEEE";
    });
  };

  Board.prototype.shiftRowsDown = function(rowNum) {
    while (rowNum > 0) {
      var currentRow = this.cells[rowNum];
      currentRow.forEach(function(cell) {
        var cellAbove = this.cells[cell.row - 1][cell.col];
        cell.filled = cellAbove.filled;
        cell.color = cellAbove.color;
        cell.render();
      }.bind(this))
      rowNum--;
    };
    this.clearRow(rowNum);
  };
  // Board.prototype.draw = function(ctx) {
  //   ctx.rect(100, 100, Board.boardSize, Board.boardSize * 2);
  //   // ctx.lineWidth = 5;
  //   ctx.stroke();
  // }
})();
