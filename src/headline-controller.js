(function(exports) {
  function HeadlineController(headlineList) {
    this.headlineListView = new HeadlineListView(headlineList);
  };

  HeadlineController.prototype.displayHeadlines = function() {
    var html = this.headlineListView.htmlString();

    return html;
  }

  exports.HeadlineController = HeadlineController;
})(this);
