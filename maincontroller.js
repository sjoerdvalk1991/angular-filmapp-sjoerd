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

  document.querySelector('.nav').classList.remove('expand');

  _this = this;

  _this.movieAPI = movieAPI;
  _this.nameFilter = null;
  _this.moviesList = [];
  _this.genres = [];

  movieAPI.getMovies().success(function(data){
    _this.moviesList = data;
  });



  this.search = function(term){
    movieAPI.search(term).success(function(data){
      _this.moviesList = data.slice(1);
    });
  }


};


moviesController.$inject = ['moviesAPIservice']

app.controller('moviesController', moviesController);



var movieController = function(movieAPI, id) {
  console.log(movieAPI);
  var _this = this;
  _this.movieAPI = movieAPI;
  _this.movie = [];
 

  _this.movieAPI.getMovie(id).success(function(data){
    _this.movie = data;
  });
};
        


movieController.$inject = ['moviesAPIservice']

app.controller('movieController', movieController);


var aboutCtrl = function() {
  var _this = this;
  document.querySelector('.nav').classList.remove('expand');
  _this.message = 'About this app';
  };

app.controller('aboutCtrl', aboutCtrl);

var gestureControl = function(){

var _this = this;
    
 _this.expand = function() {
      console.log('test');
      document.querySelector('.nav').classList.toggle('expand');
    }

 elementPage = document.querySelector('body');
      Hammer(elementPage).on("swipeleft", function(event) {
        document.querySelector('.nav').classList.remove('expand');
      
  });
  elementPage = document.querySelector('body');
   Hammer(elementPage).on("swiperight", function(event) {
    document.querySelector('.nav').classList.toggle('expand');
        
      
  });

_this.loader = function(){
  document.getElementById('splashscreen').classList.add('showsplashscreen');
    setTimeout(function(){
      document.getElementById('splashscreen').classList.add('hide');
    }, 2000);
  
  }
_this.loader();
}




app.controller('gestureControl', gestureControl);





