(function() {
  window.Tetris = window.Tetris || {};

  var ScoreView = Tetris.ScoreView = function(board) {
    this.board = board;
    this.ctx = board.ctx;
    this.score = board.rowsCleared;
    this.drawWord();
  };

  ScoreView.prototype.drawWord = function() {
    var startX = Tetris.Cell.boardX;
    var startY = Tetris.Cell.boardY + 21 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    this.ctx.clearRect(startX - 10, startY - 10, 200, 200)
    this.ctx.font = "16px Lucida Sans";
    this.ctx.fillStyle = "#707070"
    this.ctx.fillText("Rows Cleared: ", startX, startY);
  };

  ScoreView.prototype.render = function() {
    // debugger
    if (this.score != 0 && this.score === this.board.rowsCleared) {
      return;
    }
    this.score = this.board.rowsCleared;
    var startX = Tetris.Cell.boardX + 6 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    var startY = Tetris.Cell.boardY + 21 * (Tetris.Cell.cellSize + Tetris.Cell.cellSpacing);
    this.ctx.clearRect(startX - 5, startY - 14, 200, 200);
    this.ctx.font = "16px Lucida Sans";
    this.ctx.fillStyle = "#707070"
    this.ctx.fillText(this.score, startX, startY);
  }

})();
