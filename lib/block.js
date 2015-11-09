(function() {
  window.Tetris = window.Tetris || {};

  var Block = Tetris.Block = function(board) {
    this.board = board;
    this.stuck = false;
  };

  // fill in the block
  Block.prototype.display = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      cell.color = this.color;
      cell.render();
    }.bind(this));
  };

  // undisplay the block, when falling
  Block.prototype.undisplay = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      cell.color = "#707070";
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
      this.origin[0] = this.origin[0] + 1
      this.display();
    } else {
      this.stick();
    }
  };

  Block.prototype.stick = function() {
    this.coords.forEach(function(coord) {
      var row = coord[0];
      var col = coord[1];
      var cell = this.board.cells[row][col];
      cell.filled = true;
    }.bind(this))
    this.stuck = true;
    this.board.clearRows();
  };

  Block.prototype.fastFall = function() {
    while (!this.stuck) {
      this.fall();
    }
  };

  Block.prototype.updateGhost = function() {

  }

  Block.prototype.tryShift = function(dir) {
    if (this.stuck) {
      return false;
    }
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
      this.origin[1] = this.origin[1] + dir
      this.display();
    }
  };

  Block.prototype.tryRotate = function(dir) {
    if (this.stuck) {
      return false;
    }
    for (var i = 0; i < this.coords.length; i++) {
      var coord = this.coords[i];
      // rotation algorithm
      // subtract origin from point, then flip it;
      var modCoord = [coord[1] - this.origin[1], coord[0] - this.origin[0]];
      if (dir === "counter") {
        modCoord[0] = modCoord[0] * -1;
      } else {
        modCoord[1] = modCoord[1] * -1;
      }
      // add origin values back
      var newRow = modCoord[0] + this.origin[0];
      var newCol = modCoord[1] + this.origin[1];
      // check if invalid
      if ((newRow > 19) || (newRow < 0) || (newCol < 0) || (newCol > 9)) {
        return false;
      }
      var nextCell = this.board.cells[newRow][newCol];
      if (nextCell.filled) {
        return false;
      }
    }
    return true;
  };

  Block.prototype.rotate = function(dir) {
    if (this.tryRotate(dir)) {
      this.undisplay();
      this.coords.forEach(function(coord) {
        var modCoord = [coord[1] - this.origin[1], coord[0] - this.origin[0]];
        if (dir === "counter") {
          modCoord[0] = modCoord[0] * -1;
        } else {
          modCoord[1] = modCoord[1] * -1;
        }
        // reassigns coord
        coord[0] = modCoord[0] + this.origin[0]
        coord[1] = modCoord[1] + this.origin[1];
      }.bind(this));
      this.display();
    }
  };

})();
