(function(exports){
  function HeadlineList() {
    this._headlines = [];

  };
  HeadlineList.prototype.createHeadline = function(headline) {
    this._headlines.push(new Headline(headline))
  };


  HeadlineList.prototype.list = function() {
    return this._headlines;
  };

  exports.HeadlineList = HeadlineList;
})(this);
