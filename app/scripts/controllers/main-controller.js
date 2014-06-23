'use strict';

angular.module('ccappApp')
    .controller('MainCtrl', function ($scope,$http,$log) {
        $scope.mapdata = {sites:[]};

        var onPinClick = function() {
            var me = this;
            $scope.$apply(me.model.showwindow = true);
        }

        var onInfoWindowClosed = function() {
            var me = this;
            $scope.$apply(me.model.showwindow = false);
            InfoBox.prototype.close();
        }


        $scope.map = {
            center: {
                latitude: 43.898184,
                longitude: -75.051124
            },
            zoom: 13
        };
        $http.get('data/ccdata.json').success(function(data) {

            angular.forEach(data,function(s) {
                var point = {
                    showwindow:false,
                    coords:{
                        latitude: s.latitude,
                        longitude: s.longitude
                    },
                    template:'views/window.html',
                    onPinClick:onPinClick,
                    onInfoWindowClosed:onInfoWindowClosed

                };
                angular.extend(s,point);
            });
            $scope.mapdata.sites = data;
        });

        $scope.onClickClose = function(event) {
            $log.log('onClickClose()');
        }

    });
