(function(exports) {
  function HeadlineListView(headlineList) {
     this.headlineList = headlineList;
  }

  HeadlineListView.prototype.htmlString = function() {
    var html = '<ul>';
    for (var i = 0; i < this.headlineList.list().length; i++) {
    html += "<li><div><a href='http://localhost:8080#headlines/"
   + this.headlineList.list()[i].getId() + "'>"
   + this.headlineList.list()[i].getHeadline()
   + "</a></div></li>"
  };
     html += '</ul>'
     return html;
  };

  exports.HeadlineListView = HeadlineListView;
})(this);
