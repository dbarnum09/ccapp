'use strict';

angular.module('ccappApp')
    .factory('Noaa', function Noaa($http,$q,$log) {
        //private functionality
        //http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00308248&startdate=2010-08-11&enddate=2010-08-13
        var deferred = $q.defer();

        var url = 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data';
        var headers = {
            token: 'pupUaUEQCktIsCLddMMLRLrAoSNoNlpi'
        };

        var params = {
            datasetid:'GHCND',
            stationid:'GHCND:USC00308248',
            //YYYY-MM-DD
            startdate:'',
            //YYYY-MM-DD
            enddate:''
        };

        var config = {
            headers:headers,
            params:params
        }

        /**
         * Process the data returned from the NOAA service
         * @param data
         */
        var processData = function(data) {
            $log.log('data:');
            deferred.resolve(data);
        };

        return {
            getData:function(startdate,enddate) {
                params.startdate = startdate;
                params.enddate = enddate;
                $http.get(url,config).success(processData).error(function(error) {
                    $log.error(JSON.stringify(error));
                });
                return deferred.promise;
            }
        }
    });
