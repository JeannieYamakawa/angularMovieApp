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



app.controller('movieApp', ['$scope', '$http', function($scope, $http){
    $scope.omdb = {};



    $scope.searchButtonClicked = function(whatUserTyped){
        console.log(whatUserTyped, "whatUserTyped");
        $http.get('http://www.omdbapi.com/?s=' + whatUserTyped).then(function(dataReturnedFromOMDB){
          $scope.omdb.movieData = dataReturnedFromOMDB.data.Search;
          console.log(dataReturnedFromOMDB.data.Search);

          $scope.omdb.searchInput = undefined;

        });
        }
}]);








app.controller('singleMovie', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.omdb={};
    $scope.omdb.movieID = $routeParams.movieID;


    $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieID).then(function(singleMovieData){



      console.log(singleMovieData.data, "DATA RETURNED SINGLE MOVIE");


    });




}]);
