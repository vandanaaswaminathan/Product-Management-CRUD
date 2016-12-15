'use strict';

// Declare app level module which depends on filters, and services
angular.module('productManagement', [
  'ngRoute',
  'productManagement.services',
  'productManagement.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {templateUrl: 'views/productForm.html', controller: 'productAppCtrl'});
  $routeProvider.otherwise({redirectTo: '/products'});
}]);
