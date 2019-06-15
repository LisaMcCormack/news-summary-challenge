(function(exports) {

  function Headline(news) {
    this._news = news
  };

  Headline.prototype.news = function() {
    return this._news;
  };
  
  exports.Headline = Headline;
})(this);
