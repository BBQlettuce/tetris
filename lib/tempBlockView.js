(function() {
  window.Tetris = window.Tetris || {};

  var TempBlockView = Tetris.TempBlockView = function(game, options) {
    this.ctx = game.ctx;
    this.viewType = options.viewType;
    this.block = this.viewType === "next" ? game.nextBlock : game.storedBlock;

    // orientation values
    this.startX;
    if (this.viewType === "next") {
      this.startX = Tetris.Cell.boardX + 11 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    }
    else if (this.viewType === "stored") {
      this.startX = Tetris.Cell.boardX - (Tetris.Cell.cellSize + 2 * Tetris.Cell.cellSpacing) - TempBlockView.boxSize;
    }
    this.startYText = Tetris.Cell.boardY + Tetris.Cell.cellSize / 2;
    this.startY = this.startYText + Tetris.Cell.cellSize;

    // this.drawBox();
  };

  TempBlockView.cellSize = Tetris.Cell.cellSize * .75;
  TempBlockView.boxSize = 4 * TempBlockView.cellSize;

  TempBlockView.prototype.drawBox = function() {
    // debugger
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#707070";
    this.ctx.fillText(this.viewType, this.startX, this.startYText);
    this.ctx.rect(this.startX - 2, this.startY - 2, TempBlockView.boxSize + 3, TempBlockView.boxSize + 3);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#707070"
    this.ctx.stroke();
  };

  TempBlockView.prototype.render = function() {
    this.drawBox();
    this.ctx.clearRect(this.startX, this.startY, TempBlockView.boxSize, TempBlockView.boxSize);
    if (!this.block) {
      return;
    }

    var coords = this.block.coords;
    var color = this.block.color;
    var inBoxStartX = this.startX;
    var inBoxStartY = this.startY + TempBlockView.cellSize;

    coords.forEach(function(coord) {
      var startX = (coord[1] - 3) * TempBlockView.cellSize + inBoxStartX;
      var startY = coord[0] * TempBlockView.cellSize + inBoxStartY;
      this.ctx.fillStyle = color;
      this.ctx.fillRect(startX, startY, TempBlockView.cellSize, TempBlockView.cellSize);
    }.bind(this))

  }

})();
