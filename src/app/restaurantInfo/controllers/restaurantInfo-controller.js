'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:RestaurantInfoController
 * @description
 * # RestaurantInfoController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('RestaurantInfoController', function ($scope, $stateParams, serrviceConnectorFactory) {
    
    var vm = this;
    serrviceConnectorFactory.getRestaurantInfo({res_id: $stateParams.restaurantid}, {}, function (data) {
      vm.restaurantInfo = data;
      vm.city = data.location.city_name;
    })

    serrviceConnectorFactory.getRestaurantReviews({res_id: $stateParams.restaurantid, start: 0, count: 5}, {}, function (data) {
      console.log(data)
      vm.reviews = data.user_reviews;
    })
  });
