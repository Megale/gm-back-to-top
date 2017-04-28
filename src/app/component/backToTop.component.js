(function () {
    'use strict';

    angular
        .module('backToTop')
        .component('gmBackToTop', {

            controller: 'backToTopController',
            templateUrl: 'app/component/template/backToTop.tmpl.html',
            bindings: {
                        gmspeed: '<',
                        gmstyle: '@'
                      }
        })

})();
