function testHeadlineListreturnsAHeadlineObject(){
  var headlineList = new HeadlineList();
  var headline = new Headline("Hong Kong leader suspends extradition bill amid protest pressure");
  headlineList.addToList(headline);
  assert.isTrue(headlineList.list().length === 1 )
};

testHeadlineListreturnsAHeadlineObject()
