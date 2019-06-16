(function(exports) {
  function HeadlineController(headlineList) {
    this.headlineListView = new HeadlineListView(headlineList);
  };

  HeadlineController.prototype.displayHeadlines = function(list) {
    var html = this.headlineListView.htmlString(list);

    return html;
  }

  exports.HeadlineController = HeadlineController;
})(this);
