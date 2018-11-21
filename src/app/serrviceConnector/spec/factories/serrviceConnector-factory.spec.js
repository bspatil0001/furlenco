describe('Factory: serrviceConnectorFactory', function() {
  var serrviceConnector;
  beforeEach(module('workplace'));
  beforeEach(inject(function(_serrviceConnectorFactory_) {
    serrviceConnector = _serrviceConnectorFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(serrviceConnector.someMethod() == 42).toBeTruthy();
  });

});
