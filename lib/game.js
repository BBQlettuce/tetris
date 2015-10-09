(function () {
  window.Tetris = window.Tetris || {};

  var Game = Tetris.Game = function(ctx) {
    this.ctx = ctx;
    this.simpleControls = true;
    this.nextBlockView = new Tetris.TempBlockView(this, {viewType: "next"});
    this.storedBlockView = new Tetris.TempBlockView(this, {viewType: "stored"});

    // for interval clearing
  };

  Game.prototype.bindKeys = function(controls) {
    // change depending on controls
    if (this.simpleControls) {
      $(document).unbind("keypress");
      $(document).keydown(function(e) {
        e.preventDefault();
        switch(e.which) {
          // enter - start game
          case 13:
            this.restartGame();
          break;
          // p - pause game
          case 80:
            this.pauseToggle();
          break;
          // space - fast drop
          case 32:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.currentBlock.fastFall();
          break;
          // left - shift left
          case 37:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.currentBlock.shift(-1);
          break;
          // down - fall
          case 40:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.currentBlock.fall();
          break;
          // right - shift right
          case 39:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.currentBlock.shift(1);
          break;
          // up - rotate counterclockwise
          case 38:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.currentBlock.rotate("counter")
          break;
          // shift - store current block
          case 16:
            if (this.gamePaused || this.currentBlock.stuck) { return };
            this.storeBlock();
          break;
        }
      }.bind(this))
    } else {
      $(document).unbind("keydown");
      $(document).keypress(function(e) {
        e.preventDefault();
        switch(e.which) {
          // enter - start game
          case 13:
            this.restartGame();
          break;
          // p - pause game
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
    }
  };

  Game.prototype.pauseToggle = function() {
    if (!this.gameOver && !this._gamePrepped) {
      this.gamePaused = !this.gamePaused;
      // console.log("paused: " + this.gamePaused)
      if (this.gamePaused) {
        $(".timer").timer('pause');
      } else {
        $(".timer").timer('resume');
      }
      $(".timer-and-submit .display").toggleClass("active");
    }
  };

  Game.prototype.restartGame = function() {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.board = new Tetris.Board(this.ctx);
    this.resetScoreView();
    this.resetNextBlockView();
    this.resetStoredBlockView();
    this.currentBlock = null;
    this.prepNextBlock();
    this.gameOver = false;
    this.gamePaused = false;
    $(".submit-time").hide();
    $(".timer").timer('reset');
    $(".timer").timer('start');
    // this.run();
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
        game.scoreView.render();
        if (game.board.reachedTop() || game.scoreView.score >= 20 ) {
          game.end();
        };
      }
    }, 400)
  };

  Game.prototype.end = function() {
    $(".timer").timer('pause');
    this.gameOver = true;
    // window.clearInterval();
    $(".display").hide();
    $(".submit-time").toggleClass("active");
    if (this.board.reachedTop()) {
      this.board.showLoss()
    } else {
      this.board.showWin();
    }
  }

  Game.prototype.resetScoreView = function() {
    this.scoreView = new Tetris.ScoreView(this.board);
    this.scoreView.render();
  };

  Game.prototype.resetNextBlockView = function() {
    this.nextBlockView.block = null;
    // this.nextBlockView.render();
    this.nextBlockView.drawBox();
  };

  Game.prototype.updateNextBlockView = function() {
    this.nextBlockView.block = this.nextBlock;
    this.nextBlockView.render();
  };

  Game.prototype.resetStoredBlockView = function() {
    this.storedBlock = null;
    this._justStored = false;
    this.storedBlockView.block = null;
    // this.storedBlockView.render();
    this.storedBlockView.drawBox();
  };

  Game.prototype.updateStoredBlockView = function() {
    this.storedBlockView.block = this.storedBlock;
    this.storedBlockView.render();
  };

})();
