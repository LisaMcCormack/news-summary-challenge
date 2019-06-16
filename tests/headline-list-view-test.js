function testCanListHeadlinesInHTML() {
  var headlineList = new HeadlineList();
  headlineList.createHeadline("Captain of migrant rescue ship says Italy 'criminalising solidarity'");
  var headlinelistview = new HeadlineListView(headlineList)
  assert.isTrue(headlinelistview.htmlString() === "<ul><li><div><a href='http://localhost:8080#headlines/4'>Captain of migrant rescue ship says Italy 'criminalising solidarity'</a></div></li></ul>")
}

testCanListHeadlinesInHTML()
