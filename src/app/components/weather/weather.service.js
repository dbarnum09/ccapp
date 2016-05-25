(function() {
  'use strict';
  angular
    .module('weather.service', [])
    .factory('WeatherService', WeatherService);

  angular.module('weather.service').constant('WeatherServiceConstants',{
    KEY:'b56db60a3d9ab1ee',
    URL_TEMPLATE:'http://api.wunderground.com/api/<%= key %>/conditions/q/<%= latitude %>,<%= longitude %>.json'
  })

  WeatherService.$inject = ['$http', '$log','WeatherServiceConstants'];

  /* @ngInject */
  function WeatherService($http, $log,WeatherConstants) {
    var service = {
      getConditions: getConditions
    };

    return service;
    ////////////////

    function getConditions(latitude, longitude) {
      var urlTemplate = _.template(WeatherConstants.URL_TEMPLATE);
      var url = urlTemplate ({latitude:latitude,longitude:longitude,key:WeatherConstants.KEY});
      $log.debug('url:' + url);
      return $http.get(url);
    }
  }
})();
