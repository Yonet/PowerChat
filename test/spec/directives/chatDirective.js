'use strict';

describe('Directive: chatDirective', function () {

  // load the directive's module
  beforeEach(module('powerChatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chat-directive></chat-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chatDirective directive');
  }));
});
