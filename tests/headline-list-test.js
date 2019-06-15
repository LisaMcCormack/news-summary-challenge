function testHeadlineListreturnsAHeadlineObject(){
  var headlineList = new HeadlineList();
  var headline = new Headline("Hong Kong leader suspends extradition bill amid protest pressure");
  headlineList.addToList(headline);
  assert.isTrue(headlineList.list().length === 1 )
};

testHeadlineListreturnsAHeadlineObject();

function testHeadlineCanBeCreated(){
  var headlineList = new HeadlineList()
  var headline = new Headline("Thousands of Syrian refugees could be sent back, says Lebanese minister")
  headlineList.createHeadline(headline)
  headlineList.addToList(headline);
  assert.isTrue(headlineList.list().length === 1 )
};

testHeadlineCanBeCreated()
