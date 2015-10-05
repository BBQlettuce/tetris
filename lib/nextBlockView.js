(function() {
  window.Tetris = window.Tetris || {};

  var NextBlockView = Tetris.NextBlockView = function(game) {
    this.ctx = game.ctx;
    this.block = game.nextBlock;
    this.drawBox();
  };

  NextBlockView.cellSize = Tetris.Cell.cellSize * .75;
  NextBlockView.boxSize = 4 * NextBlockView.cellSize;

  NextBlockView.prototype.drawBox = function() {
    var startX = Tetris.Cell.boardX + 11 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    var startY = Tetris.Cell.boardY;
    this.ctx.rect(startX, startY, NextBlockView.boxSize, NextBlockView.boxSize);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#404040"
    this.ctx.stroke();
  };

  NextBlockView.prototype.render = function() {

  }

})();
