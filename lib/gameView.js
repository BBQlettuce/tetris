(function() {
  window.Tetris = window.Tetris || {};

  var GameView = Tetris.GameView = function(ctx) {
    this.ctx = ctx;
  };

  GameView.prototype.bindKeys = function() {
    $(document).keypress(function(e) {
      e.preventDefault();
      switch(e.which) {

      }
    })
  };

  Gameview.prototype.newGame = function() {

  };

  Gameview.prototype.pause = function() {

  };
})();
