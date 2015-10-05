(function() {
  window.Tetris = window.Tetris || {};

  var Util = Tetris.Util = function() {
  };

  var inherits = Util.inherits = function(childClass, parentClass) {
    function Surrogate () {this.constructor = childClass};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

})();
