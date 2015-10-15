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
        this.displayLeaders(leaders);
      }.bind(this)
    });
  };

  LeadersView.prototype.submitNew = function(data) {
    $.ajax({
      type: "POST",
      data: data,
      url: "http://slamtris.herokuapp.com/leaders",
      datatype: "json",
      success: function(leaders) {
        this.displayLeaders(leaders);
      }.bind(this)
    });
  };

  LeadersView.prototype.displayLeaders = function(leaders) {
    this.$el.empty();
    debugger
    if (!leaders) {
      return;
    }
    var leaderlist = $("<ol>");
    if (leaders.length > 1) {
      leaders.forEach(function(leader) {
        var item = $("<li>" + leader.name + "<br>" + leader.timestring + "</li>");
        leaderlist.append(item);
      });
    }
    for (var blanks = 10 - leaders.length; blanks > 0; blanks--) {
      var item = $("<li>- - - - - - - - - -</li>");
      leaderlist.append(item);
    };

    this.$el.html(leaderlist);
  };

})();
