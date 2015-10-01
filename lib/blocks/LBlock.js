(function () {
  window.Tetris = window.Tetris || {};

  var IBlock = Tetris.IBlock = function(board) {
    this.coords = IBlock.startingCoords;
    this.color = IBlock.color;
    Tetris.Block.call(this, board);
  };

  IBlock.startingCoords = [[0,6],[1,4],[1,5],[1,6]];
  IBlock.color = "#F19E32";

  Tetris.Util.inherits(IBlock, Tetris.Block);

})();
