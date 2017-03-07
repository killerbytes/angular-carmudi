'use strict';

/**
 * @ngdoc service
 * @name carmudiApp.carService
 * @description
 * # carService
 * Service in the carmudiApp.
 */
angular.module('carmudiApp')
  .service('carService', function ($http, $q, $filter, api) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function findAll(page, limit){
      page = page || 0;
      limit = limit || 10;
      var d = $q.defer();
      $http.get(api.url + "/cars", {
        params: {
          _page: page,
          _limit: limit
        }
      }).then(function(res){
        res.total = res.headers('X-Total-Count');
        d.resolve(res);
      }, function(err){
        d.reject(err);
      })
      return d.promise;
    }

    function findRecord(id){
      var d = $q.defer();

      $http.get(api.url + '/cars').then(function(res){
        
        // console.log($filter('filter')(res.data, {'id':id}) )
        var item = res.data.find(function(i){
          return i.id == id;
        })
        d.resolve(item);
      }, function(err){
        d.reject(err);
      })
      return d.promise;
    }
    return {
      findAll: findAll,
      findRecord: findRecord
    }
  });
