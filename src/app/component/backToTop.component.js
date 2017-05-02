(function () {
    'use strict';

    angular
        .module('backToTop')
        .component('gmBackToTop', {

            controller: 'backToTopController',
            templateUrl: 'src/app/template/backToTop.tmpl.html',
            bindings: {
                        gmspeed: '<',
                        gmstyle: '@'
                      }
        })

})();
