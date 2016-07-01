(function() {
  'use strict';

  angular
    .module('ccapp')
    .config(config);

  /** @ngInject */
  function config(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAeTw8T_YkMDXkzVXTh9Scx02d4bmQmupk',
      libraries: 'weather,geometry,visualization'
    });
  }

})();
