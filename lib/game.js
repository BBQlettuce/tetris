(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.bindKeys();
  };

  Game.prototype.bindKeys = function() {
    $(document).keypress(function(e) {
      e.preventDefault();
      switch(e.which) {
        // start game
        case 32:
          this.restartGame();
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
        // j - rotate counterclockwise
        case 106:
          this.currentBlock.rotate("counter")
        break;
        // k - rotate clockwise
        case 107:
          this.currentBlock.rotate("clock")
        break;
        // e - store current block
        case 101:
          this.storeBlock();
        break;
      }
    }.bind(this))
  };

  Game.prototype.pauseToggle = function() {
    if (!this.gameOver) {
      this.gamePaused = !this.gamePaused;
      console.log("paused: " + this.gamePaused)
    }
  };

  Game.prototype.restartGame = function() {
    if (this._gamePrepped) {
      console.log("space to restart game")
      this.gamePaused = false;
      this._gamePrepped = false;
    } else {
      console.log("space to start game")
      this.board = new Tetris.Board(this.ctx);
      this.currentBlock = null;
      this.storedBlockType = null;
      this.prepNextBlock();
      this.resetScoreView();
      this.resetNextBlockView();
      this.resetStoredBlockView();
      this.gameOver = false;
      this.gamePaused = true;
      this._gamePrepped = true;
    }
  };

  // list of blocks as functions
  Game.blocksList = [
    Tetris.IBlock,
    Tetris.JBlock,
    Tetris.LBlock,
    Tetris.OBlock,
    Tetris.SBlock,
    Tetris.TBlock,
    Tetris.ZBlock
  ]

  // spawns the prepared block onto the page
  Game.prototype.spawnBlock = function() {
    if (!this.currentBlock || this.currentBlock.stuck) {
      this.currentBlock = new this.nextBlockType(this.board);
      this.currentBlock.display();
      this.prepNextBlock();
    } else {
      return;
    }
  };

  Game.prototype.storeBlock = function() {
    var typeToSave = this.currentBlock.constructor;
    this.currentBlock.undisplay();
    if (!this.storedBlockType) {
      this.prepNextBlock();
      this.spawnBlock();
    } else {
      this.currentBlock = new this.storedBlockType(this.board);
      this.currentBlock.display();
    }
    this.storedBlockType = typeToSave;
    this.updateStoredBlockView();
  };

  // prepare next block randomly; store in variable
  Game.prototype.prepNextBlock = function() {
    this.nextBlockType = Game.blocksList[Math.floor(Math.random() * Game.blocksList.length)];
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
  };

  Game.prototype.resetScoreView = function() {
    // this.scoreView = new Tetris.ScoreView(this);
  };

  Game.prototype.resetNextBlockView = function() {

  };

  Game.prototype.resetStoredBlockView = function() {

  };

  Game.prototype.updateStoredBlockView = function() {

  };

})();
