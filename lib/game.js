(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.board = new Tetris.Board(this.ctx);
  };

  Game.prototype.spawnBlock = function() {

  };

})();
