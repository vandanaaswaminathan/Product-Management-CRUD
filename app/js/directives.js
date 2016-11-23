'use strict';

/* Directives */

angular.module('myWeatherApplication.directives', [])

  //
  // Simple directive just setting version as elements value (kept from angular-seed dist)
  //
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

    /**
     * Create directive that handles formatting, resource fetching and output of weather data for a specific date
     * @return weather data
     * @author: Vandanaa Swaminathan
     */
  .directive('weatherPanel',[function factory() {
    return {
      restrict: 'EA',

      scope: {
        useDayForecast: '=showEntry',
        forecast: '=weatherPanel'
      },

      templateUrl: 'views/_weather-panel-light.html',

      link: function(scope, element, attrs) {
        // Get icon image url
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    }
  }])


