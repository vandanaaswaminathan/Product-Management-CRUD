'use strict';

/* jasmine specs for controllers go here */

describe('OpenWeather App controllers', function(){

  beforeEach(module('productManagement.controllers'));
  beforeEach(module('productManagement.services'));

  describe('productAppCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('productManagement'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:8080/products').
        respond([{_embedded: {products: {id: 1,title:'Red Alexander Wang Dress',price:1200} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('productAppCtrl', { $scope: $scope });
    }));

  });
});
