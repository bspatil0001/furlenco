'use strict';
describe('Controller: RestaurantInfoController', function () {
// load the controller's module
  beforeEach(module('workplace'));
  var RestaurantInfoController,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestaurantInfoController = $controller('RestaurantInfoController', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
