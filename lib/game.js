(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.board = new Tetris.Board(this.ctx);
    // this.currentBlock = ????
  };

  GameView.prototype.bindKeys = function() {
    $(document).keypress(function(e) {
      e.preventDefault();
      switch(e.which) {
        // start game
        case 32:
        break;
        // pause game
        case 112:
        break;
        // w - fast drop
        case 119:
        break;
        // a - shift left
        case 97:
        break;
        // s - fall
        case 115:
        break;
        // d - shift right
        case 100:
        break;
        // e - saveblock
        case 101:
        break;
        // j - rotate counterclockwise
        case 106:
        break;
        // k - rotate clockwise
        case 107:
        break;
      }
    })
  };

  Game.prototype.spawnBlock = function() {

  };

})();
