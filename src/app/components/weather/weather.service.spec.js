'use strict';

describe('WeatherService', function () {

  var WeatherService,WeatherServiceConstants,$httpBackend;
  beforeEach(module('weather.service'));

  beforeEach(inject(function (_WeatherService_,_WeatherServiceConstants_,$injector) {
    $httpBackend = $injector.get('$httpBackend');
    WeatherService = _WeatherService_;
    WeatherServiceConstants = _WeatherServiceConstants_;
  }));

  describe('getConditions',function(){

    beforeEach(function(){
      var expectedURL = 'http://api.wunderground.com/api/'+WeatherServiceConstants.KEY + '/conditions/q/0,0.json';
      $httpBackend.expectGET(expectedURL).respond({});
    });

    it('should make a call to weather underground api', function () {
      WeatherService.getConditions(0,0);
      $httpBackend.flush();
    });

    it('should return a temperature when given a latitude and longitude', function () {
      var temperatureHandler = jasmine.createSpy('temperatureHandler');
      WeatherService.getConditions(0,0).then(temperatureHandler);
      $httpBackend.flush();
      expect(temperatureHandler).toHaveBeenCalled();
    });
  });

  describe('getHistory',function() {
    beforeEach(function(){
      var expectedURL = 'http://api.wunderground.com/api/'+WeatherServiceConstants.KEY + '/history/q/0,0.json';
      $httpBackend.expectGET(expectedURL).respond({});
    });

    it ('should return a data object given a location and a date',function () {
      var historyHandler = jasmine.createSpy('historyHandler');
      WeatherService.getHistory(0,0).then(historyHandler);
      $httpBackend.flush();
      expect(historyHandler).toHaveBeenCalled();
    });
  });



});
