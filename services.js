(function() {

    var app = angular.module('movieApp');

    var movieAPI = function($http) {
      this.$http = $http;


    };

    movieAPI.$inject = ['$http'];


    movieAPI.prototype.movies = function (){
      var _this = this;
      return _this.$http.get('http://dennistel.nl/movies');
    };

  });