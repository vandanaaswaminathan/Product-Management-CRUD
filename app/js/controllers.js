'use strict';

/* Controllers */

angular.module('myWeatherApplication.controllers', [])

  // Controller for "open weather map" api data search
  .controller('WeatherApplCtrl',
    ['$scope','openWeatherMap','exampleLocations','stormLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,stormLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    // Expose example locations to $scope
    $scope.exampleLocations = exampleLocations;

    /**
     * On inti load data for first example entry
     * @return the first location in the example data
     * @author: Vandanaa Swaminathan
     */
    // 
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    /**
     * Get forecast data for location as given in $scope.location
     * @return forecast data
     * @author: Vandanaa Swaminathan
     */
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }
      // set the state to success if successfull
      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };
    /**
     * Set $scope.location and execute search on API
     * @return 
     * @author: Vandanaa Swaminathan
     */
    // 
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
