'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:RestaurantsController
 * @description
 * # RestaurantsController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('RestaurantsController', function ($scope, $stateParams, serrviceConnectorFactory) {
    let vm = this;
    serrviceConnectorFactory.getEventResult($stateParams, {}, function (data) {
      console.log(data)
      vm.location = data.location.title + ", " + data.location.city_name;
      vm.nearby_restaurants = data.nearby_restaurants;
      vm.city = data.location.city_name;
    })
  });
