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
    var $key = 'cf105cac41336c0fb6ca5c5006faf043';
    var $url = 'https://developers.zomato.com/api/v2.1';

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
