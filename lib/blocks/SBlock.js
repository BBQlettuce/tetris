(function () {
  window.Tetris = window.Tetris || {};

  var SBlock = Tetris.SBlock = function(board) {
    this.coords = [[0,4],[0,5],[1,3],[1,4]];
    this.origin = [1,4];
    this.color = "#00F000";
    Tetris.Block.call(this, board);
  };

  // SBlock.startingCoords = [[0,4],[0,5],[1,3],[1,4]];
  // SBlock.color = "#00F000";

  Tetris.Util.inherits(SBlock, Tetris.Block);

})();
