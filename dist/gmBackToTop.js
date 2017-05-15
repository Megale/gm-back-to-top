(function() {
  'use strict';

  angular
    .module('backToTop', []);

})();

(function() {
  'use strict';

  runBlock.$inject = ["$log"];
  angular
    .module('backToTop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('backToTop module loaded');
  }

})();

(function () {
    'use strict';

    angular
        .module('backToTop')
        .component('gmBackToTop', {

            controller: 'backToTopController',

           template:  '<div>' +
                       ' <button class = "{{$ctrl.style}}" ' +
                       ' ng-class="$ctrl.startedScrolling" type="button" ng-click="$ctrl.goToTop()">' +
                       '   <i id = "arrowIcon" class="material-icons">keyboard_arrow_up</i>' +
                       '</button>' +
                       '</div>',
                       
            bindings: {
                        gmspeed: '<',
                        gmstyle: '@'
                      }
        })

})();

(function () {
    'use strict';

    function didIReachTheTop() {

        return (this.pixelsScrolledToTop <= 0);
    }

    function returnVelocity() {

        var inc = Math.PI / (this.gmspeed / 10);
        var velocity = this.pixelsScrolledToTop * (0.5 - 0.5 * Math.cos(this.count * inc));

        return velocity;
    }

    function stopScrolling(scrollFn) {
        this.window.scrollTo(0, 0)
        this.interval.cancel(scrollFn);
    }

    function configDefaults() {
        this.style = this.gmstyle || "md-fab md-fab-bottom-right md-button md-ink-ripple docs-scroll-fab";
        this.gmspeed = this.gmspeed || 500;
    }

      /** @ngInject */
    angular
        .module('backToTop')
        .controller('backToTopController', ["$window", "$scope", "$document", "$interval", function ($window, $scope, $document, $interval) {

            var that = this;
            that.interval = $interval;
            that.window = $window;
            that.scope = $scope;
            that.pixelsScrolledToTop = 0;
            that.count = 0;

            configDefaults.call(that);

            that.startedScrolling = 'hideBackToTop';

            that.window.addEventListener("scroll", function (event) {

                that.pixelsScrolledToTop = angular.element(that.window).scrollTop();

                that.scope.$apply(function () {

                    that.startedScrolling = (that.pixelsScrolledToTop > 0 ? 'showBackToTop' : 'hideBackToTop');
                });

            });



            this.goToTop = function () {

                that.count = 0;

                (function scrollToTop() {

                    that.count++;

                    if (didIReachTheTop.call(that)) {

                        stopScrolling.call(that, scroll);
                    }

                    else {

                        that.pixelsScrolledToTop -= returnVelocity.call(that);
                        window.scrollTo(0, that.pixelsScrolledToTop)
                        setTimeout(scrollToTop, 10);

                    }

                })();
            }
        }]

        )

})();
