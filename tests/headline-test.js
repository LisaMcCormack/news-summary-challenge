function testHeadlineReturnsAHeadline(){
  var headline1 = new Headline("Hong Kong leader suspends extradition bill amid protest pressure");

  assert.isTrue(headline1.getHeadline() === "Hong Kong leader suspends extradition bill amid protest pressure")

};

testHeadlineReturnsAHeadline()

function testIDisCreated(){
  var headline1 = new Headline("Hong Kong leader suspends extradition bill amid protest pressure");
  assert.isTrue(headline1.getId() === 5)
}

testIDisCreated()
