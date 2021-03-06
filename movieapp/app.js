var app = angular.module('myMovies', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/homepage.html',
        controller: 'movieApp'
      })
      .when('/:movieID', {
        templateUrl: 'partials/singleMovie.html',
        controller: 'singleMovie'
      })
});



app.controller('movieApp', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){
    $scope.omdb = {};



    $scope.searchButtonClicked = function(whatUserTyped){
        console.log(whatUserTyped, "whatUserTyped");
        $http.get('http://www.omdbapi.com/?s=' + whatUserTyped).then(function(dataReturnedFromOMDB){
          $scope.omdb.movieData = dataReturnedFromOMDB.data.Search;
          console.log(dataReturnedFromOMDB.data.Search);

          $rootScope.searchTitle = undefined;

        });
        }
}]);








app.controller('singleMovie', ['$scope', '$http', '$rootScope','$routeParams', '$location',function($scope, $http, $rootScope,$routeParams, $location){
    $scope.omdb={};
    $scope.omdb.movieID = $routeParams.movieID;


    $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieID).then(function(singleMovieData){

        $scope.omdb.movieData = singleMovieData.data;
    });

    $scope.searchButtonClicked = function(whatUserTyped){

        $location.path('/#/');
        
        console.log(whatUserTyped, "whatUserTyped");
        $http.get('http://www.omdbapi.com/?s=' + whatUserTyped).then(function(dataReturnedFromOMDB){
          $scope.omdb.movieData = dataReturnedFromOMDB.data.Search;
          console.log(dataReturnedFromOMDB.data.Search);

          $rootScope.searchTitle = undefined;





        });
        }




}]);
