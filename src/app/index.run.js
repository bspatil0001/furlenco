(function() {
  'use strict';

  angular
    .module('workplace')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
