function testHeadlineListreturnsAHeadlineObject(){
  var headlineList = new HeadlineList();
  headlineList.createHeadline("Hong Kong leader suspends extradition bill amid protest pressure");
  assert.isTrue(headlineList.list().length === 1 )
};

testHeadlineListreturnsAHeadlineObject();

function testHeadlineCanBeCreated(){
  var headlineList = new HeadlineList()
  headlineList.createHeadline("Thousands of Syrian refugees could be sent back, says Lebanese minister")
  assert.isTrue(headlineList.list().length === 1 )
};

testHeadlineCanBeCreated()
