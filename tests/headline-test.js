function testHeadlineReturnsAHeadline(){
  var headline = new Headline("Hong Kong leader suspends extradition bill amid protest pressure");

  assert.isTrue(headline.news() === "Hong Kong leader suspends extradition bill amid protest pressure")
};

testHeadlineReturnsAHeadline()
