(function () {
  window.Tetris = window.Tetris || {};

  var IBlock = Tetris.IBlock = function(board) {
    this.coords = IBlock.startingCoords;
    this.color = IBlock.color;
    Tetris.Block.call(this, board);
  };

  IBlock.startingCoords = [[0,4],[0,5],[1,3],[1,4]];
  IBlock.color = "#00F000";

  Tetris.Util.inherits(IBlock, Tetris.Block);

})();
