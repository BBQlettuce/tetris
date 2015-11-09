(function() {
  window.Tetris = window.Tetris || {};

  var Util = Tetris.Util = function() {
  };

  var inherits = Util.inherits = function(childClass, parentClass) {
    function Surrogate () {this.constructor = childClass};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  var dupCoords = Util.dupCoords = function(coords) {
    var coordsCopy = [];
    coords.forEach(function(coord) {
      coordsCopy.push(coord.slice());
    });
    return coordsCopy;
  };

})();
