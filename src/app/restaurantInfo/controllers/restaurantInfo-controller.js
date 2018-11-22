'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:RestaurantInfoController
 * @description
 * # RestaurantInfoController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('RestaurantInfoController', function ($scope, $rootScope, $stateParams, serrviceConnectorFactory) {

    var vm = this;

    let promiseCall = [
      serrviceConnectorFactory.getRestaurantInfo({
        res_id: $stateParams.restaurantid
      }, {}),
      serrviceConnectorFactory.getRestaurantReviews({
        res_id: $stateParams.restaurantid,
        start: 0,
        count: 5
      }, {})
    ]

    let promise1 = serrviceConnectorFactory.getRestaurantInfo({
      res_id: $stateParams.restaurantid
    }, {}, function (data) {
      vm.restaurantInfo = data;
      vm.city = data.location.city_name;
      $rootScope.loading = false;
    })

    let promise2 = serrviceConnectorFactory.getRestaurantReviews({
      res_id: $stateParams.restaurantid,
      start: 0,
      count: 5
    }, {}, function (data) {
      vm.reviews = data.user_reviews;
    })
    $rootScope.loading = true;
    Promise.all([promise1, promise2]).then(function () {}).catch(function () {
      $rootScope.loading = false;
    });

    let list = localStorage.getItem('listRestaurant')

    vm.list = list ? JSON.parse(list) : [];
    vm.likeRestaurant = function (status, id) {
      if (status) {
        vm.list.push(id);
      } else {
        let index = vm.list.indexOf(id);
        vm.list.splice(index, 1);
      }
      localStorage.setItem('listRestaurant', JSON.stringify(vm.list));
    }



    // serrviceConnectorFactory.getRestaurantInfo({
    //   res_id: $stateParams.restaurantid
    // }, {}, function (data) {
    //   vm.restaurantInfo = data;
    //   vm.city = data.location.city_name;
    // });

    // serrviceConnectorFactory.getRestaurantReviews({
    //   res_id: $stateParams.restaurantid,
    //   start: 0,
    //   count: 5
    // }, {}, function (data) {
    //   vm.reviews = data.user_reviews;
    //   console.log(vm.reviews)
    // })
  });
