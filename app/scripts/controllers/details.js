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
      $scope.loading = true;
      carService.findRecord($routeParams.id).then(function(res){
        $scope.model = res;
        $scope.loading = false;
      }, function(err){
        $scope.loading = false;
        //handle error
      })
    }
  });
