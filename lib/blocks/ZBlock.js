(function () {
  window.Tetris = window.Tetris || {};

  var ZBlock = Tetris.ZBlock = function(board) {
    this.coords = [[0,4],[0,5],[1,5],[1,6]];
    this.origin = [1,5];
    this.color = "#F00000";
    Tetris.Block.call(this, board);
  };

  // ZBlock.startingCoords = [[0,4],[0,5],[1,5],[1,6]];
  // ZBlock.color = "#F00000";

  Tetris.Util.inherits(ZBlock, Tetris.Block);

})();
