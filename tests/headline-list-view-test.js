function testCanListHeadlinesInHTML() {
  var headlineList = new HeadlineList();
  var headline = new Headline("Captain of migrant rescue ship says Italy 'criminalising solidarity'")
  headlineList.addToList(headline);
  var headlinelistview = new HeadlineListView(headlineList)

  assert.isTrue(headlinelistview.htmlString() === "<ul><li><div><a href='http://localhost:8080#headlines/3'>Captain of migrant rescue ship says Italy 'criminalising solidarity'</a></div></li></ul>")
}

testCanListHeadlinesInHTML()
