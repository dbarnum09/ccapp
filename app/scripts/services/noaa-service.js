'use strict';

angular.module('ccappApp')
  .factory('NOAA', function Noaa() {
        //private functionality
        //http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00308248&startdate=2010-08-11&enddate=2010-08-13
        var url = 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data';
        var headers = {
            headers:{
                token:'pupUaUEQCktIsCLddMMLRLrAoSNoNlpi'
            }
        };
        var params = {
            datasetid:'GHCND',
            stationid:'GHCND:USC00308248',
            //YYYY-MM-DD
            startdate:'',
            //YYYY-MM-DD
            enddate:''
        };

    return {
        getData:function(startdate,enddate) {

        }
    }
  });
