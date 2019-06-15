(function(exports) {

  function Headline(headline) {
    this._headline = headline;
  };

  Headline.prototype.getHeadline = function() {
    return this._headline;
  };

  exports.Headline = Headline;
})(this);
