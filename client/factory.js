app.factory('people', function ($http) {

  var sapiens = [];

 

  return sapiens;
});

// function(list){

//   var successCallback = function(){
//     console.log("great")
//   }
//   var errorCallback = function() {
//     console.log("better luck next time")
//   }

//     $http.post('/people', list).then(successCallback, errorCallback);
// }