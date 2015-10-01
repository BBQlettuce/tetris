(function () {
  window.Tetris = window.Tetris || {};

  var IBlock = Tetris.IBlock = function(board) {
    this.coords = IBlock.startingCoords;
    this.color = IBlock.color;
    Tetris.Block.call(this, board);
  };

  IBlock.startingCoords = [[0,3],[1,3],[1,4],[1,5]];
  IBlock.color = "#0000F0";

  Tetris.Util.inherits(IBlock, Tetris.Block);

})();
