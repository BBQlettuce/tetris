(function () {
  window.Tetris = window.Tetris || {};

  var IBlock = Tetris.IBlock = function(board) {
    this.coords = IBlock.startingCoords;
    this.color = IBlock.color;
    Tetris.Block.call(this, board);
  };

  IBlock.startingCoords = [[0,3],[0,4],[0,5],[0,6]];
  IBlock.color = "#00F0F0";

  Tetris.Util.inherits(IBlock, Tetris.Block);

})();
