'use strict';

/**
 * @ngdoc function
 * @name shivamTestSprint7RefactorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shivamTestSprint7RefactorApp
 */
angular.module('shivamTestSprint7RefactorApp')
  .controller('MainCtrl', ['$scope', 'ClientAppService', function ($scope, ClientAppService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.username = "Mithilesh";
    ClientAppService.call();
  }
  ]);
