'use strict';

/**
 * @ngdoc directive
 * @name carmudiApp.directive:pager
 * @description
 * # pager
 */
angular.module('carmudiApp')
  .directive('pager', function ($route) {
    return {
      templateUrl: 'views/directives/pager.html',
      replace: true,
      restrict: 'E',
      scope: {
        pager: "="
      },
      link: function postLink(scope, element, attrs) {
        var pager = scope.pager;

        scope.$watch('pager.total', function(){
          if(!pager.total) return false; //exit;

          scope.pages = Math.ceil(parseInt(pager.total) / pager.limit );

          scope.items = [...Array(scope.pages).keys()].slice(0,4);
          scope.ellipsis = scope.pages - 3 <= scope.items[3] ? true : false;
          scope.last = [scope.pages-1, scope.pages];

          scope.nextDisabled = pager.currentPage == scope.pages;
          scope.prevDisabled = pager.currentPage <= 1;


        })

        scope.select = function(page){
          $route.updateParams({page: page});
        }


        scope.previous = function(){
          var page = parseInt(pager.currentPage) - 1;
          $route.updateParams({page: page});
        }

        scope.next = function(){
          var page = parseInt(pager.currentPage) + 1;
          $route.updateParams({page: page});
        }
      }
    };
  });
