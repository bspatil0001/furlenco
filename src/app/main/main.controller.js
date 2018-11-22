(function () {
  'use strict';

  angular
    .module('workplace')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, serrviceConnectorFactory, webDevTec, toastr, $state, $rootScope) {
    var vm = this;

    $rootScope.loading = false;

    console.log(this)

    vm.cities = [{
      lat: '12.9716',
      lon: '77.5946',
      name: 'Bangalore'
    }, {
      lat: '19.0760',
      lon: '72.8777',
      name: 'Mumbai'
    }, {
      lat: '17.3850',
      lon: '78.4867',
      name: 'Hydrabad'
    }, {
      lat: '28.7041',
      lon: '77.1025',
      name: 'New Delhi'
    }];

    function getLocation() {
      if (navigator.geolocation) {
        $rootScope.loading = false;
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        $rootScope.loading = false;
      }
    }

    getLocation();

    function showPosition(position) {
      $state.go('restaurants', {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    }

    vm.selectCity = function (city) {
      $state.go('restaurants', city)
    }
  }
})();
