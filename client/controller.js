app.controller('peopleCtrl', function($scope, people, $http){

   var fetch = function() {
    console.log('running the fetch')
    $http({
      method: 'GET',
      url: '/peoples',
      responseType: 'json'
    }).then(
      function successCallback(response){
        console.log(response);
        people.push(response.data);
        $scope.machine=people

      },
      function errorCallback(response){
        console.log("bad job!")
      });

  };

  setInterval(fetch, 1000);



});






//GET function - angular - client side

// $scope.fetch = function() {

//   console.log("got to fetch");

//   $http({
//       method: 'GET',
//       url: 'https://randomuser.me/api/',
//       responseType: 'json'
//     }).then(function successCallback(response){

//       console.log(response.data.results[0].name.first);

//       var profile = {
//         firstName: response.data.results[0].name.first,
//         picture: response.data.results[0].picture.medium

//       }

//       people.sapiens.push(profile);

//     },
//       function errorCallback(response){
//       // called asynchronously if an error occurs
//       // or server returns response with an error status.

//       console.log('bad request: status 404');

//     });

//   }


// $scope.humans = people.sapiens;
