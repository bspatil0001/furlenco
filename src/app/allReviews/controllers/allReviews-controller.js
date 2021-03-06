'use strict';
/**
 * @ngdoc function
 * @name workplace.controller:AllReviewsController
 * @description
 * # AllReviewsController
 * Controller of the workplace
 */
angular.module('workplace')
  .controller('AllReviewsController', function ($scope, $stateParams, serrviceConnectorFactory) {
    let vm = this;
    vm.total = undefined;
    vm.reviews = [];

    function populateData(){
      let temp = vm.reviews.slice(0,5)
      vm.reviews = vm.reviews.concat(temp);
      $scope.$digest();
    }

    function getReviews() {
      serrviceConnectorFactory.getRestaurantReviews({
        res_id: $stateParams.restaurantid,
        start: 0,
        count: 10
      }, {}, function (data) {
        vm.reviews = vm.reviews.concat(data.user_reviews);

        while(vm.reviews.length < 15){
          populateData();
        }
      })
    }

    if (!vm.total || vm.reviews.length < 100) {
      getReviews();

      $.fn.isFullyInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        return elementTop >= viewportTop && elementBottom <= viewportBottom;
      };

      $(window).on('resize scroll', function () {
        $('.last').is(function () {
          if ($(this).isFullyInViewport()) {
            if (!vm.total && vm.reviews.length <= 100) {
              populateData();             
            }
          }
        })
      });
    }


  });
