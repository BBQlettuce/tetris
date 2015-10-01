(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.bindKeys();
    this.newGame();
    // this.board = new Tetris.Board(this.ctx);
    // this.currentBlock = ????
  };

  Game.prototype.bindKeys = function() {
    $(document).keypress(function(e) {
      e.preventDefault();
      switch(e.which) {
        // start game
        case 32:
          this.newGame();
        break;
        // pause game
        case 112:
          this.pauseToggle();
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
    }.bind(this))
  };

  Game.prototype.pauseToggle = function() {
    if (!this.boardJustCreated) {
      this.gamePaused = !this.gamePaused;
      console.log("paused: " + this.gamePaused)
    }
  };

  Game.prototype.newGame = function() {
    if (this.boardJustCreated) {
      console.log("space to restart game")
      this.gamePaused = false;
      this.boardJustCreated = false;
    }
    else {
      console.log("space to start game")
      this.board = new Tetris.Board(this.ctx);
      this.boardJustCreated = true;
      this.gamePaused = true;
    }
  };

  Game.prototype.spawnBlock = function() {

  };

})();
