(function () {
  'use strict';
  angular.module('weather.service',[]).constant('WeatherServiceConstants', {
    KEY: 'b56db60a3d9ab1ee',
    BASE_URL:'http://api.wunderground.com/api/<%= key %>',
    CONDITIONS_URL_TEMPLATE:function() {  return this.BASE_URL + '/conditions/q/<%= latitude %>,<%= longitude %>.json'; },
    HISTORY_URL_TEMPLATE:function() { return this.BASE_URL + '/history_<%= date %>/q/<%= latitude %>,<%= longitude %>.json'}
  });

  angular
    .module('weather.service')
    .factory('WeatherService', WeatherService);


  WeatherService.$inject = ['$http', '$log', 'WeatherServiceConstants'];

  /* @ngInject */
  function WeatherService($http, $log, WeatherConstants) {
    ////////////////


    /* eslint no-undef: 0 */
    function getConditions(latitude, longitude) {
      var urlTemplate =_.template(WeatherConstants.CONDITIONS_URL_TEMPLATE());
      var url = urlTemplate({latitude: latitude, longitude: longitude, key: WeatherConstants.KEY});
      $log.debug('url:' + url);
      return $http.get(url);
    }

    function getHistory(latitude,longitude,date) {
      var urlTemplate =_.template(WeatherConstants.HISTORY_URL_TEMPLATE());
      var url = urlTemplate({latitude: latitude, longitude: longitude, key: WeatherConstants.KEY});
      $log.debug('url:' + url);
      return $http.get(url);
    }


    var service = {
      getConditions: getConditions,
      getHistory:getHistory
    };

    return service;

  }
})();
