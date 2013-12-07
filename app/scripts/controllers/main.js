'use strict';
angular.module('chat.controllers', [])
  .controller('MainCtrl',['$scope', 'angularFireCollection', 
    function ($scope, angularFireCollection) {
      var ref = new Firebase('https://empowerchat.firebaseio.com/');
      angularFireCollection(ref.limit(15), $scope, "messages");
      $scope.username = 'Guest' + Math.floor(Math.random()*101);
      $scope.addMessage = function() {
        $scope.messages[ref.push().name()] = {
          from: $scope.username, content: $scope.message
        };
        $scope.message = "";
      }}]
  );
