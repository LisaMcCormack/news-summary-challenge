(function(exports){
  function HeadlineList() {
    this._headlines = [];

  };
  HeadlineList.prototype.createHeadline = function(headline) {
    return new Headline(headline);
  };

  HeadlineList.prototype.addToList = function(news) {
    this._headlines.push(news)
  };

  HeadlineList.prototype.list = function() {
    return this._headlines;
  };

  exports.HeadlineList = HeadlineList;
})(this);
