(function() {
  'use strict';

  angular
    .module('workplace')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('restaurants', {
        url: '/restaurants/:lat/:lon/:name',
        templateUrl: 'app/restaurants/restaurants.html',
        controller: 'RestaurantsController',
        controllerAs: 'main'
      })
      .state('restaurant-info', {
        url: '/restaurants-info?restaurantid',
        templateUrl: 'app/restaurantInfo/restaurant-info.html',
        controller: 'RestaurantInfoController',
        controllerAs: 'main'
      })
      .state('reviews', {
        url: '/:name/reviews?restaurantid',
        templateUrl: 'app/allReviews/all-review.html',
        controller: 'AllReviewsController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
