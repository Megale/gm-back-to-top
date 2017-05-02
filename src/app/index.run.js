(function() {
  'use strict';

  angular
    .module('backToTopTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('backToTopTest module loaded');
  }

})();
