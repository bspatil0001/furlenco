'use strict';
/**
 * @ngdoc service
 * @name workplace.serrviceConnector
 * @description
 * # serrviceConnector
 * Factory in the workplace.
 */
angular.module('workplace')
  .factory('serrviceConnectorFactory', function ($resource) {
    // Service logic
    // ...
    var $key = 'a1a486e9f860bf0d7c8f4b1f5c9fbc36';
    var $url = 'https://developers.zomato.com/api/v2.1';
    // Public API here
    return $resource('', null, {
      getEventResult: {
        url: $url+ '/geocode',
        method: 'GET',
        headers: { 
          'user-key': $key
         },
         params:{
          count: 10          
         }
      },
      getRestaurantInfo: {
        url: $url+'/restaurant',
        method: 'GET',
        headers: { 'user-key': $key },
        params: {
          res_id: "@res_id"
        }
      },
      getRestaurantReviews: {
        url: $url+'/reviews',
        method: 'GET',
        headers: { 'user-key': $key },
        params: {
          res_id: "@res_id",
          start: "@start",
          count: "@count"
        }
      }
    })
  });
