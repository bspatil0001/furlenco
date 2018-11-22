(function() {
  'use strict';

  angular
    .module('workplace')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    $rootScope.loading = false;
    $log.debug('runBlock end');
  }

})();
