(function() {
  window.Tetris = window.Tetris || {};

  var NextBlockView = Tetris.NextBlockView = function(game) {
    this.ctx = game.ctx;
    this.block = game.nextBlock;
  };

})();
