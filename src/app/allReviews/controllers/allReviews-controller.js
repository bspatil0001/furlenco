'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:AllReviewsController
 * @description
 * # AllReviewsController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('AllReviewsController', function ($stateParams, serrviceConnectorFactory) {
    let vm = this;
    vm.total = undefined;
    vm.reviews = [];

    function getReviews() {
      serrviceConnectorFactory.getRestaurantReviews({
        res_id: $stateParams.restaurantid,
        start: 0,
        count: 10
      }, {}, function (data) {
        console.log(data)
        vm.reviews = data.user_reviews;
      })
    }

    if (!vm.total || vm.total == vm.reviews.lenghth) {
      getReviews();
    }
  });
