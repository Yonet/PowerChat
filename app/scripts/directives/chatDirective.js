'use strict';

angular.module('powerChatApp')
  .directive('chatDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the chatDirective directive');
      }
    };
  });
