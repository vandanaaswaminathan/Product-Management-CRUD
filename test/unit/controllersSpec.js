'use strict';

/* jasmine specs for controllers go here */

describe('OpenWeather App controllers', function(){

  beforeEach(module('myWeatherApplication.controllers'));
  beforeEach(module('myWeatherApplication.services'));
  beforeEach(module('iso-3166-country-codes'));

  describe('WeatherApplCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('myWeatherApplication'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5').
        respond([{forecast: {city: {name: 'London'} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('WeatherApplCtrl', { $scope: $scope });
    }));

//    it('should set the default value of iconBaseUrl', function() {
//      expect($scope.iconBaseUrl).toBe('http://openweathermap.org/img/w/');
//    });
  });
});
