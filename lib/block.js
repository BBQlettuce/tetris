(function() {
  window.Tetris = window.Tetris || {};

  var Block = Tetris.Block = function(board, coords, color) {
    this.board = board;
    this.coords = coords;
    this.color = color;
    this.stuck = false;
  };

  // fill in the block
  Block.prototype.display = function() {
    this.coords.forEach(function(coord) {
      var col = coord[0];
      var row = coord[1];
      var cell = this.board.cells[col][row];
      cell.color = this.color;
      // cell.filled = true;
      cell.render();
    }.bind(this));
  };

  // undisplay the block, when falling
  Block.prototype.undisplay = function() {
    this.coords.forEach(function(coord) {
      var col = coord[0];
      var row = coord[1];
      var cell = this.board.cells[col][row];
      cell.color = "#EEEEEE";
      cell.render();
    }.bind(this));
  };

  Block.prototype.tryFall = function() {
    for (var i = 0; i < this.coords.length; i++) {
      var coord = this.coords[i];
      var col = coord[0];
      var nextRow = coord[1] + 1;
      if (nextRow >= 20) {
        return false;
      }
      var nextCell = this.board.cells[col][nextRow];
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
        coord[1] = coord[1] + 1;
      });
      this.display();
    }
    else {
      this.stick();
    }
  };

  Block.prototype.stick = function() {
    this.coords.forEach(function(coord) {
      var col = coord[0];
      var row = coord[1];
      var cell = this.board.cells[col][row];
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

  };

  Block.prototype.shift = function(dir) {

  };

})();
