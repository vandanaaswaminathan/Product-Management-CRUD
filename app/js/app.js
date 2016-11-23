'use strict';

// Declare app level module which depends on filters, and services
angular.module('myWeatherApplication', [
  'ngRoute',
  'myWeatherApplication.filters',
  'myWeatherApplication.services',
  'myWeatherApplication.directives',
  'myWeatherApplication.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'views/forecast.html', controller: 'WeatherApplCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
