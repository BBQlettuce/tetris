(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.bindKeys();
    this.newGame();
    this.run();
    // this.board = new Tetris.Board(this.ctx);
    // this.currentBlock = new Tetris.Block(this.board, [[0,0]], "#FF0000");
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
          this.currentBlock.fastFall();
        break;
        // a - shift left
        case 97:
          this.currentBlock.shift(-1);
        break;
        // s - fall
        case 115:
          this.currentBlock.fall();
        break;
        // d - shift right
        case 100:
          this.currentBlock.shift(1);
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
    if (this.gameOver) {
      console.log("space to restart game")
      this.gamePaused = false;
      this.gameOver = false;
    }
    else {
      console.log("space to start game")
      this.board = new Tetris.Board(this.ctx);
      this.gameOver = true;
      this.gamePaused = true;
    }
  };

  // list of blocks as functions... does this work?
  Game.blocksList = [
    Tetris.IBlock,
    Tetris.JBlock,
    Tetris.LBlock,
    Tetris.OBlock,
    Tetris.SBlock,
    Tetris.TBlock,
    Tetris.ZBlock
  ]
  // change to randomize
  Game.prototype.spawnBlock = function() {
    if (!this.currentBlock || this.currentBlock.stuck) {
      var nextBlockType = Game.blocksList[Math.floor(Math.random() * Game.blocksList.length)];
      debugger
      this.currentBlock = new nextBlockType(this.board);
    }
    else {
      return;
    }
  };

  Game.prototype.run = function() {
    var game = this;
    window.setInterval(function() {
      if (!game.gamePaused && !game.gameOver) {
        game.spawnBlock();
        game.currentBlock.fall();
        if (game.board.reachedTop()) {
          console.log("You lost");
          game.gameOver = true;
        }
        // game.board.clearRows();
      }
    }, 600)
  }

})();
