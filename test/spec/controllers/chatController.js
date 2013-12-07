'use strict';

describe('Controller: ChatcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('powerChatApp'));

  var ChatcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatcontrollerCtrl = $controller('ChatcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
