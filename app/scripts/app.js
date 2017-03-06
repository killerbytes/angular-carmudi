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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
