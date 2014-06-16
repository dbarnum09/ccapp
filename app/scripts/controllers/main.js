'use strict';

angular.module('ccappApp')
    .controller('MainCtrl', function ($scope) {
        //43°53'53.6"N+75°03'03.9"W/@43.898215,-75.051081,15z
        $scope.map = {
            center: {
                latitude: 43.898184,
                longitude: -75.051124
            },
            zoom: 13
        };
    });
