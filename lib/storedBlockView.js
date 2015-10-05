(function() {
  window.Tetris = window.Tetris || {};

  var StoredBlockView = Tetris.StoredBlockView = function(game) {
    this.ctx = game.ctx;
    this.block = game.StoredBlock;
    this.drawBox();
  };

  StoredBlockView.cellSize = Tetris.Cell.cellSize * .75;
  StoredBlockView.boxSize = 4 * StoredBlockView.cellSize;

  StoredBlockView.prototype.drawBox = function() {
    var startX = Tetris.Cell.boardX + 11 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    var startY = Tetris.Cell.boardY;
    this.ctx.rect(startX, startY, StoredBlockView.boxSize, StoredBlockView.boxSize);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#404040"
    this.ctx.stroke();
  };

  StoredBlockView.prototype.render = function() {

  }
})();
