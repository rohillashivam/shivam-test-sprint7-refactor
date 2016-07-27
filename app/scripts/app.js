'use strict';

/**
 * @ngdoc overview
 * @name shivamTestSprint7RefactorApp
 * @description
 * # shivamTestSprint7RefactorApp
 *
 * Main module of the application.
 */
angular
  .module('shivamTestSprint7RefactorApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
