(function () {
  window.Tetris = window.Tetris || {};

  var IBlock = Tetris.IBlock = function(board) {
    this.coords = [[0,3],[0,4],[0,5],[0,6]];
    this.color = "#00F0F0";
    Tetris.Block.call(this, board);
  };

  // IBlock.startingCoords = [[0,3],[0,4],[0,5],[0,6]];
  // IBlock.color = "#00F0F0";

  Tetris.Util.inherits(IBlock, Tetris.Block);

})();
