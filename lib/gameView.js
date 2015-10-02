(function() {
  window.Tetris = window.Tetris || {};

  var GameView = Tetris.GameView = function(ctx) {
    this.ctx = ctx;
    this.renderEverything(ctx);
  };

  GameView.prototype.renderEverything(ctx) {
    // get window.width, then set ctx.canvas.width
    ctx.canvas.width = $(window).width();
    ctx.canvas.height = $(window).height();

  };

})();
