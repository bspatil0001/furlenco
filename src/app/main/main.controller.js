(function () {
  'use strict';

  angular
    .module('workplace')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, serrviceConnectorFactory, webDevTec, toastr, $state) {
    var vm = this;

    // vm.name = "hello"

    vm.cities = [{
        lat: '12.9716',
        lon: '77.5946',
        name: 'Bangalore'
      },{
        lat: '19.0760',
        lon: '72.8777',
        name: 'Mumbai'
      },{
        lat: '17.3850',
        lon: '78.4867',
        name: 'Mumbai'
      },{
        lat: '28.7041',
        lon: '77.1025',
        name: 'New Delhi'
      }];

      // navigator.geolocation.getCurrentPosition(function(position) {
      //   console.log("position", position);
      //   // do_something(position.coords.latitude, position.coords.longitude);
      // });


      function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    getLocation();
    
    function showPosition(position) {   
      console.log('position', position);
      $state.go('restaurants', {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }) 
    }


      vm.selectCity = function(city){
        $state.go('restaurants', city)        
      }
  }
})();
