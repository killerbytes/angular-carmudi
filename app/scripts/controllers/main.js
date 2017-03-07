'use strict';

/**
 * @ngdoc function
 * @name carmudiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carmudiApp
 */
angular.module('carmudiApp')
  .controller('MainCtrl', function ($scope, $routeParams, carService) {
    $scope.pager = {
      currentPage: $routeParams.page || 1,
      limit: 10
    }
    
    carService.findAll($scope.pager.currentPage, $scope.pager.limit).then(function(res){
      $scope.results = res.data;
      $scope.pager.total = res.total;
    });
    
  });
