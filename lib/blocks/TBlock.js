(function () {
  window.Tetris = window.Tetris || {};

  var TBlock = Tetris.TBlock = function(board) {
    this.coords = TBlock.startingCoords;
    this.color = TBlock.color;
    Tetris.Block.call(this, board);
  };

  TBlock.startingCoords = [[0,4],[1,3],[1,4],[1,5]];
  TBlock.color = "#A000F0";

  Tetris.Util.inherits(TBlock, Tetris.Block);

})();
