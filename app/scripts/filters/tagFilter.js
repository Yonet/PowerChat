'use strict';

angular.module('powerChatApp')
  .filter('tagFilter', function () {
    return function (input) {
      return 'tagFilter filter: ' + input;
    };
  });
