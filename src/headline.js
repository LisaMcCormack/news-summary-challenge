(function(exports) {

  var id = 0

  function Headline(headline) {
    this._headline = headline;
    this._id = id++;
  };

  Headline.prototype.getHeadline = function() {
    return this._headline;
  };

  Headline.prototype.getId = function() {
    return this._id;
  }

  exports.Headline = Headline;
})(this);
