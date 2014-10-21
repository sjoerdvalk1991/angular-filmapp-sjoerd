angular.module('movieApp.services', []).
factory('moviesAPIservice', function($http, $routeParams) {

    var movieAPI = {};

    movieAPI.getMovies = function() {
      return $http({
        url: 'http://dennistel.nl/movies'
      });
    }

    movieAPI.getMovie = function(id) {
    	return $http({
    	url: 'http://dennistel.nl/movies/'+$routeParams.id


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

