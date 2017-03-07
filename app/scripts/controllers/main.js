'use strict';

/**
 * @ngdoc function
 * @name carmudiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carmudiApp
 */
angular.module('carmudiApp')
  .controller('MainCtrl', function ($scope, carService) {
    $scope.pager = {}
    carService.findAll().then(function(res){
      $scope.results = res.data;
      $scope.pager.total = res.total;
    })
  });
