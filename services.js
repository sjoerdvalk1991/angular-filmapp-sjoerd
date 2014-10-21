angular.module('movieApp.services', []).
factory('moviesAPIservice', function($http) {

    var movieAPI = {};

    movieAPI.getMovies = function() {
      return $http({
        // method: 'JSONP',
        url: 'http://dennistel.nl/movies'
      });
    }

    movieAPI.search = function(term) {
      return $http({
        // method: 'JSONP',
        url: 'http://dennistel.nl/movies'
      });
    }

    return movieAPI;
});