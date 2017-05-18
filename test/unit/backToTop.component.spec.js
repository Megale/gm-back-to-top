(function () {

    describe('Scrolling the user interface to its top', unitTestsScrollInterface);

    function unitTestsScrollInterface() {

        var $componentController;
        //beforeEach pertence ao jasmine e module pertence ao angular
        beforeEach(module('backToTop'));

        beforeEach(inject(initiate_Controller));


        function initiate_Controller(_$componentController_) {

            $componentController = _$componentController_;

        }

        it('should initialize the controller', function () {

            var backToTopController = $componentController('gmBackToTop');

            expect(backToTopController).toEqual(null);

        });


        it('should call the goToTop the controller', function () {

        
            var bindings = { gmspeed: 1000 };

            var backToTopController = $componentController('gmBackToTop', null, bindings);

            spyOn(backToTopController, 'goToTop');

            backToTopController.goToTop();

            expect(backToTopController.goToTop).toHaveBeenCalled();

        });
    }

}())