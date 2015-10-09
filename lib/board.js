(function() {
  window.Tetris = window.Tetris || {};

  var Board = Tetris.Board = function(ctx) {
    this.ctx = ctx;
    this.cells = [];
    this.drawBorder(this.ctx);
    this.initializeCells();
    this.rowsCleared = 0;
  };

  // Board.cornerX = 100;
  // Board.cornerY = 100;

  Board.prototype.initializeCells = function() {
    // this.ctx.clearRect(0, 0, 800, 600);
    for (var row = 0; row < 20; row++) {
      var rowArray = [];
      for (var col = 0; col < 10; col++) {
        cell = new Tetris.Cell(row, col, this.ctx);
        rowArray.push(cell);
        cell.render();
      }
      this.cells.push(rowArray);
    }
  };

  Board.prototype.drawBorder = function(ctx) {
    var startX = Tetris.Cell.boardX - Tetris.Cell.cellSpacing;
    var startY = Tetris.Cell.boardY - Tetris.Cell.cellSpacing;
    var totalX = 10 * (Tetris.Cell.cellSize) + 11 * (Tetris.Cell.cellSpacing);
    var totalY = 20 * (Tetris.Cell.cellSize) + 21 * (Tetris.Cell.cellSpacing);
    ctx.rect(startX, startY, totalX, totalY);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#404040"
    ctx.stroke();
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
          this.rowsCleared++;
        }
      }
    }
  };

  Board.prototype.clearRow = function(rowNum) {
    var row = this.cells[rowNum];
    row.forEach(function(cell) {
      cell.filled = false;
      cell.color = "#707070";
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

  // loss condition: will implement official ones later!
  Board.prototype.reachedTop = function() {
    var topRow = this.cells[0];
    return (_.some(topRow, function(cell) {
      return cell.filled
    }))
  };

  Board.prototype.showLoss = function() {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
        var cell = this.cells[row][col];
        if (cell.filled) {
          cell.color = "#444444";
          cell.render();
        }
      }
    }
    // var startX = 70;
    // var startY = 250;
    this.ctx.font = "80px Impact";
    this.ctx.fillStyle = "#FF4500";
    this.ctx.fillText("DUNKED", 70, 250);
  },

  Board.prototype.showWin = function() {
    // var startX = 30;
    // var startY = 230;
    this.ctx.font = "80px Impact";
    this.ctx.fillStyle = "#FF4500";
    this.ctx.fillText("WELL DONE,", 30, 230);
    this.ctx.fillText("BALLER", 90, 300);
    debugger;
    // unbind stuff?
    $(document).unbind("keypress");
  };

})();
