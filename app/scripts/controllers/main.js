'use strict';

angular.module('ccappApp')
    .controller('MainCtrl', function ($scope) {
        $scope.map = {
            center: {
                latitude: 43.898184,
                longitude: -75.051124
            },
            zoom: 13
        };
    });
