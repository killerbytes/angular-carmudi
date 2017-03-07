'use strict';

/**
 * @ngdoc function
 * @name carmudiApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the carmudiApp
 */
angular.module('carmudiApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, carService) {

    if($routeParams.id){
      carService.findRecord($routeParams.id).then(function(res){
        $scope.model = res;
      })
    }
  });
