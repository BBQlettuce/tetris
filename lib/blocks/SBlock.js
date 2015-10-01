(function () {
  window.Tetris = window.Tetris || {};

  var SBlock = Tetris.SBlock = function(board) {
    this.coords = SBlock.startingCoords;
    this.color = SBlock.color;
    Tetris.Block.call(this, board);
  };

  SBlock.startingCoords = [[0,4],[0,5],[1,3],[1,4]];
  SBlock.color = "#00F000";

  Tetris.Util.inherits(SBlock, Tetris.Block);

})();
