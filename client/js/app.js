var app = angular.module('bookingApp', ['ngRoute','ngResource','ngAnimate','ui.bootstrap','ngStorage'])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: './views/home.html'
		})
		.when('/flight-search-page/:destination/:date/:passenger', {
		    templateUrl: './views/result.html'
		  }) 
		.otherwise({templateUrl:'./views/404.html'});
}]);