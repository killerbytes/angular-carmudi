'use strict';

/**
 * @ngdoc directive
 * @name carmudiApp.directive:pager
 * @description
 * # pager
 */
angular.module('carmudiApp')
  .directive('pager', function () {
    return {
      templateUrl: 'views/directives/pager.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
