// window.onload = function(){
//
// 	// var body = document.getElementById('body');
// 	// body.style.background = 'pink';
//   headlineList = new HeadlineList();
//   headlineController = new HeadlineController(headlineList);
// 	document.getElementById('button').addEventListener('click', guardianAPI);
// 	})
// }
 // load guardian api
  function guardianAPI(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://content.guardianapis.com/world?api-key=test&format=json', true);
    xhr.onload = function(){
      if(this.status == 200){
        var headlines = JSON.parse(this.responseText);
        console.log(headlines);
      }
    }
   xhr.send();
  }
