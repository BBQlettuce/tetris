(function() {
  window.Tetris = window.Tetris || {};

  var LeadersView = Tetris.LeadersView = function(el) {
    this.$el = el;
  };

  LeadersView.prototype.getLeaders = function() {
    $.ajax({
      type: "GET",
      url: "http://slamtris.herokuapp.com/leaders",
      datatype: "json",
      success: function(leaders) {
        console.log(leaders)
      }
    });
  };

  LeadersView.prototype.submitNew = function(data) {
    $.ajax({
      type: "POST",
      data: data,
      url: "http://slamtris.herokuapp.com/leaders",
      datatype: "json",
      success: function(leaders) {
        console.log(leaders)
      }

    });
  };

  LeadersView.prototype.displayLeaders = function(leaders) {

  };

})();
