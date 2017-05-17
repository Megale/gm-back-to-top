(function () {

    describe('Scrolling the user interface to its top', unitTestsScrollInterface);

    function unitTestsScrollInterface() {

        var backToTopController;
        //beforeEach pertence ao jasmine e module pertence ao angular
        beforeEach(module('backToTop'));

        beforeEach(inject(initiate_Controller));


        function initiate_Controller(_$controller_) {

            backToTopController = _$controller_('backToTopController');

        }


        ///testes de inicialização do controlador de JOBs.
        it('should initialize the controller', function () {

            expect(backToTopController).not.toEqual(null);

        });
    }

}())