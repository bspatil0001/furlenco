'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:RestaurantsController
 * @description
 * # RestaurantsController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('RestaurantsController', function ($scope, $stateParams, serrviceConnectorFactory, $rootScope) {
    let vm = this;
    $rootScope.loading = true;
    serrviceConnectorFactory.getEventResult($stateParams, {}, function (data) {
      vm.location = data.location.title + ", " + data.location.city_name;
      vm.nearby_restaurants = data.nearby_restaurants;
      vm.city = data.location.city_name;
      $rootScope.loading = false;
    })

    let list = localStorage.getItem('listRestaurant')
    vm.list = list ? JSON.parse(list) : [];
    console.log(vm.list)
    vm.likeRestaurant = function (status, id) {
      if (status) {
        vm.list.push(id);
      } else {
        let index = vm.list.indexOf(id);
        vm.list.splice(index, 1);
      }
      localStorage.setItem('listRestaurant', JSON.stringify(vm.list));
    }
  });
