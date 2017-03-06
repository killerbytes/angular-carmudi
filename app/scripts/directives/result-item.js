'use strict';

/**
 * @ngdoc directive
 * @name carmudiApp.directive:resultItem
 * @description
 * # resultItem
 */
angular.module('carmudiApp')
  .directive('resultItem', function () {
    return {
      templateUrl: 'views/directives/result-item.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
