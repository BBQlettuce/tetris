(function () {
  window.Tetris = window.Tetris || {};

  var LBlock = Tetris.LBlock = function(board) {
    this.coords = LBlock.startingCoords;
    this.color = LBlock.color;
    Tetris.Block.call(this, board);
  };

  LBlock.startingCoords = [[0,6],[1,4],[1,5],[1,6]];
  LBlock.color = "#F19E32";

  Tetris.Util.inherits(LBlock, Tetris.Block);

})();
