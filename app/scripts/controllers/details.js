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
    $scope.thumbnail = "http://placehold.it/385x286";

    if($routeParams.id){
      carService.findRecord($routeParams.id).then(function(res){
        $scope.model = res;
      })
    }
  });
