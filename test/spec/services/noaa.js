'use strict';

describe('Service: Noaa', function () {

  // load the service's module
  beforeEach(module('ccappApp'));

  // instantiate service
  var Noaa;
  beforeEach(inject(function (_Noaa_) {
    Noaa = _Noaa_;
  }));

  it('should do something', function () {
    expect(!!Noaa).toBe(true);
  });

});
