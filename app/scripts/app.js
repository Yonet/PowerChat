'use strict';
//var app = angular.module("myapp", ["firebase"]);
angular.module('chat', ["firebase", "chat.Controllers"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
