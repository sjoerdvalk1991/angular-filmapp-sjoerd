var app = angular.module('movieApp', ['ngRoute','movieApp.services']);



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


var moviesController = function(movieAPI){

  var self = this;

  this.movieAPI = movieAPI;
  this.nameFilter = null;
  this.moviesList = [];
  this.genres = [];

  movieAPI.getMovies().success(function(data){
    self.moviesList = data;
  });

  setTimeout(function(){
    self.search('bla');
  }, 5000);

  this.search = function(term){
    movieAPI.search(term).success(function(data){
      self.moviesList = data.slice(1);
    });
  }

};


moviesController.$inject = ['moviesAPIservice']

app.controller('moviesController', moviesController);



var movieController = function($http, $routeParams) {
  var _this = this;
  _this.movie = [];

  console.log('movie');
  $http.get('http://dennistel.nl/movies/'+$routeParams.id).success(function(data){
      _this.movie = data;
      console.log(data);
  });

};

app.controller('movieController', movieController);


var aboutCtrl = function() {
  var _this = this;
  _this.message = 'About this app';
  };

app.controller('aboutCtrl', aboutCtrl);


