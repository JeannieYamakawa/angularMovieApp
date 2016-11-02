var app = angular.module('myMovies', ['ngRoute']);

app.controller('movieApp', ['$scope', '$http', function($scope, $http){
    $scope.omdb = {};

    $scope.searchButtonClicked = function(whatUserTyped){
        console.log(whatUserTyped);
    }



    // // Simple GET request example:
    // $http({
    //   method: 'GET',
    //   url: '/someUrl'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

}])
