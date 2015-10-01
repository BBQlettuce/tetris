(function() {
  window.Tetris = window.Tetris || {};

  var Util = Tetris.Util = function() {
  };

  var inherits = Util.inherits = function(childClass, parentClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

})();
