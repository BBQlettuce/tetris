(function() {
  window.Tetris = window.Tetris || {};

  var TempBlockView = Tetris.TempBlockView = function(game, options) {
    this.ctx = game.ctx;
    this.viewType = options.viewType;
    this.block = this.viewType === "next" ? game.nextBlock : game.storedBlock;
    this.drawBox();
  };

  TempBlockView.cellSize = Tetris.Cell.cellSize * .75;
  TempBlockView.boxSize = 4 * TempBlockView.cellSize;

  TempBlockView.prototype.drawBox = function() {
    var startX;
    if (this.viewType === "next") {
      var startX = Tetris.Cell.boardX + 11 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    }
    else if (this.viewType === "stored") {
      var startX = Tetris.Cell.boardX - (Tetris.Cell.cellSize + 2 * Tetris.Cell.cellSpacing) - TempBlockView.boxSize;
    }
    var startYText = Tetris.Cell.boardY + Tetris.Cell.cellSize / 2;
    var startY = startYText + Tetris.Cell.cellSize;

    this.ctx.font = "20px Arial";
    this.ctx.fillText(this.viewType, startX, startYText);
    this.ctx.rect(startX, startY, TempBlockView.boxSize, TempBlockView.boxSize);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#404040"
    this.ctx.stroke();
  };

  TempBlockView.prototype.render = function() {

  }

})();
