'use strict';

angular.module('ccappApp').controller('MainCtrl', function ($scope,$http,$log,WeatherService) {
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
                latitude: 37.898184,
                longitude: -80.051124
            },
            zoom: 5
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
        ////YYYY-MM-DD
        var sd = '2014-01-01';
        var end = '2014-01-02';

        WeatherService.getConditions(43.905984,-74.946327).then(function(data) {
          console.table(data);
        });

    });
