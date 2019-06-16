function testControllerCreatesHeadlineHTML() {
  headlinelist = new HeadlineList();
  headlinelist.createHeadline("First headline");
  headlinelist.createHeadline("Second headline");
  var headlineController = new HeadlineController(headlinelist);
  assert.isTrue(headlineController.displayHeadlines() === "<ul><li><div><a href='http://localhost:8080#headlines/0'>First headline</a></div></li><li><div><a href='http://localhost:8080#headlines/1'>Second headline</a></div></li></ul>");
};

testControllerCreatesHeadlineHTML()
