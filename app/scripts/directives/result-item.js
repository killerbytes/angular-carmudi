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
      scope: {
        item: "="
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
