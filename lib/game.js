(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.bindKeys();
    this.nextBlockView = new Tetris.TempBlockView(this, {viewType: "next"});
    this.storedBlockView = new Tetris.TempBlockView(this, {viewType: "stored"});
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
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.fastFall();
        break;
        // a - shift left
        case 97:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.shift(-1);
        break;
        // s - fall
        case 115:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.fall();
        break;
        // d - shift right
        case 100:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.shift(1);
        break;
        // j - rotate counterclockwise
        case 106:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.rotate("counter")
        break;
        // k - rotate clockwise
        case 107:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.currentBlock.rotate("clock")
        break;
        // e - store current block
        case 101:
          if (this.gamePaused || this.currentBlock.stuck) { return };
          this.storeBlock();
        break;
      }
    }.bind(this))
  };

  Game.prototype.pauseToggle = function() {
    if (!this.gameOver && !this._gamePrepped) {
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
      this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.board = new Tetris.Board(this.ctx);
      this.resetScoreView();
      this.resetNextBlockView();
      this.resetStoredBlockView();
      this.currentBlock = null;
      this.prepNextBlock();
      // this.resetScoreView();
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

  // prepare next block randomly; store in variable
  Game.prototype.prepNextBlock = function() {
    var nextBlockType = Game.blocksList[Math.floor(Math.random() * Game.blocksList.length)];
    this.nextBlock = new nextBlockType(this.board);
    this.updateNextBlockView();
  };

  // spawns the prepared block onto the page
  Game.prototype.spawnBlock = function() {
    if (!this.currentBlock || this.currentBlock.stuck) {
      this.currentBlock = this.nextBlock;
      this.currentBlock.display();
      this.prepNextBlock();
      // allow for swapping again once a new block is spawned
      this._justStored = false;
    } else {
      return;
    }
  };

  Game.prototype.storeBlock = function() {
    if (this._justStored) {
      return;
    }

    var typeToStore = this.currentBlock.constructor;
    this.currentBlock.undisplay();
    if (!this.storedBlock) {
      this.prepNextBlock();
      this.currentBlock = null;
      this.spawnBlock();
    } else {
      this.currentBlock = this.storedBlock;
      this.currentBlock.display();
    }
    this.storedBlock = new typeToStore(this.board);
    this.updateStoredBlockView();
    this._justStored = true;
  };


  Game.prototype.run = function() {
    var game = this;
    window.setInterval(function() {
      if (!game.gamePaused && !game.gameOver) {
        game.spawnBlock();
        game.currentBlock.fall();
        if (game.board.reachedTop()) {
          game.gameOver = true;
          game.board.freeze();
        };
        game.scoreView.render();
      }
    }, 150)
  };

  Game.prototype.resetScoreView = function() {
    this.scoreView = new Tetris.ScoreView(this.board);
    this.scoreView.render();
  };

  Game.prototype.resetNextBlockView = function() {
    this.nextBlockView.block = null;
    this.nextBlockView.render();
  };

  Game.prototype.updateNextBlockView = function() {
    this.nextBlockView.block = this.nextBlock;
    this.nextBlockView.render();
  };

  Game.prototype.resetStoredBlockView = function() {
    this.storedBlock = null;
    this._justStored = false;
    this.storedBlockView.block = null;
    this.storedBlockView.render();
  };

  Game.prototype.updateStoredBlockView = function() {
    this.storedBlockView.block = this.storedBlock;
    this.storedBlockView.render();
  };

})();
