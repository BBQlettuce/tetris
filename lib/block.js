(function() {
  window.Tetris = window.Tetris || {};

  var Block = Tetris.Block = function(board, coords, color) {
    this.board = board;
    this.coords = coords;
    this.color = color;
    this.stuck = false;
    this.display();
  };

  // fill in the block
  Block.prototype.display = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      cell.color = this.color;
      // cell.filled = true;
      cell.render();
    }.bind(this));
  };

  // undisplay the block, when falling
  Block.prototype.undisplay = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      cell.color = "#EEEEEE";
      cell.render();
    }.bind(this));
  };

  Block.prototype.tryFall = function() {
    for (var i = 0; i < this.coords.length; i++) {
      var coord = this.coords[i];
      var col = coord[1];
      var nextRow = coord[0] + 1;
      if (nextRow >= 20) {
        return false;
      }
      var nextCell = this.board.cells[nextRow][col];
      if (nextCell.filled) {
        return false;
      }
    }
    return true;
  };

  Block.prototype.fall = function() {
    if (this.tryFall()) {
      this.undisplay();
      this.coords.forEach(function(coord) {
        coord[0] = coord[0] + 1;
      });
      this.display();
    }
    else {
      this.stick();
    }
  };

  Block.prototype.stick = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      // cell.color = this.color;
      cell.filled = true;
      cell.render();
    }.bind(this))
    this.stuck = true;
    this.board.clearRows();
  };

  Block.prototype.fastFall = function() {
    while (!this.stuck) {
      this.fall();
    }
  };

  Block.prototype.tryShift = function(dir) {
    for (var i = 0; i < this.coords.length; i++) {
      var coord = this.coords[i];
      var row = coord[0];
      var nextCol = coord[1] + dir;
      if (nextCol < 0 || nextCol > 9) {
        return false;
      }
      var nextCell = this.board.cells[row][nextCol];
      if (nextCell.filled) {
        return false;
      }
    }
    return true;
  };

  Block.prototype.shift = function(dir) {
    if (this.tryShift(dir)) {
      this.undisplay();
      this.coords.forEach(function(coord) {
        coord[1] = coord[1] + dir;
      });
      this.display();
    }
  };

})();
