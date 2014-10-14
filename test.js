var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'partials/movies.html',
        controller  : 'moviesController'
      })

      // route for the about page
      .when('/about', {
        templateUrl : 'partials/about.html',
        controller  : 'aboutCtrl'
      })

      // route for the contact page
      .when('/movies', {
        templateUrl : 'partials/movies.html',
        controller  : 'moviesController'
      })


      .when('/movies/:id', {
        templateUrl : 'partials/movie.html',
        controller : 'movieController'
      })
});

// app.controller('moviesController', function($scope, $http) {
//   this.nameFilter = null;
//   $scope.moviesList = [];

var moviesController = function($scope, $http){
  var _this = this;

$scope.moviesList = function(){
  _this.moviesList();
  };
};

moviesController.prototype.moviesList = function(){

  $http.get('http://dennistel.nl/movies').success(function(data){
    $scope.moviesList = data;
    console.log(data);

  });

};


moviesController.$inject = [ '$scope' ];

app.controller('moviesController', moviesController);



app.controller('genreController', function($scope, data) {
$scope.genres = _.chain($scope.moviesList).pluck("genres").uniq().sortBy().value();
  console.log($scope.genres);

});

app.controller('movieController', function($scope, $http, $routeParams) {
  $scope.movie = [];
  console.log('movie');
  $http.get('http://dennistel.nl/movies/'+$routeParams.id).success(function(data){
  $scope.movie = data;
      console.log(data);
  });

});

app.controller('aboutCtrl', function($scope) {
  $scope.message = 'About this app';
});