'use strict';
/**
 * @ngdoc directive
 * @name workplace.directive:review
 * @description
 * # review
 */
angular.module('workplace')
  .directive('review', function () {
    return {
      templateUrl: '/app/review/review.html',
      restrict: 'E',
      scope: {
        reviews: '='
      },
      link:function(scope, elem, attr) { 
        console.log($('.last').is(':visible'));
       },
    };
  });
