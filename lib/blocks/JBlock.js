(function () {
  window.Tetris = window.Tetris || {};

  var JBlock = Tetris.JBlock = function(board) {
    this.coords = [[0,3],[1,3],[1,4],[1,5]];
    this.color = "#0000F0";
    Tetris.Block.call(this, board);
  };

  // JBlock.startingCoords = [[0,3],[1,3],[1,4],[1,5]];
  // JBlock.color = "#0000F0";

  Tetris.Util.inherits(JBlock, Tetris.Block);

})();
