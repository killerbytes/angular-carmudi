'use strict';

/**
 * @ngdoc overview
 * @name carmudiApp
 * @description
 * # carmudiApp
 *
 * Main module of the application.
 */
angular
  .module('carmudiApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .constant('api', {
    url: 'http://localhost:3000'
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.cache = true;
  }])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
