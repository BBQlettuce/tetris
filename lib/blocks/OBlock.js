(function () {
  window.Tetris = window.Tetris || {};

  var OBlock = Tetris.OBlock = function(board) {
    this.coords = [[0,4],[0,5],[1,5],[1,4]];
    this.origin = [.5,4.5];
    this.color = "#F0F000";
    Tetris.Block.call(this, board);
  };

  // OBlock.startingCoords = [[0,4],[0,5],[1,5],[1,4]];
  // OBlock.color = "#EFEF4B";

  Tetris.Util.inherits(OBlock, Tetris.Block);

})();
