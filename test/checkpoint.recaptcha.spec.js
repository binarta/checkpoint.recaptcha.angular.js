describe('checkpoint.recaptcha.js', function() {
    var scope;

    angular.module('ui.bootstrap.modal', []);

    beforeEach(module('config'));
    beforeEach(module('notifications'));
    beforeEach(module('vcRecaptcha'));
    beforeEach(module('checkpoint.recaptcha'));
    beforeEach(function() {
        scope = {
            captcha:'guess'
        };
    });

    describe('when mapping a registration request message', function() {
        var registrationRequestMessage;

        beforeEach(inject(function(registrationRequestMessageMapper) {
            registrationRequestMessage = registrationRequestMessageMapper(scope);
        }));

        it('then captcha is included on request message', function() {
            expect(registrationRequestMessage.captcha).toEqual(scope.captcha);
        });
    });

    describe('when a checkpoint.registration.rejected message raised', function() {
        beforeEach(inject(function(topicRegistryMock) {
            topicRegistryMock['checkpoint.registration.rejected']();
        }));

        it('then reload recaptcha without taking focus', inject(function(vcRecaptchaServiceSpy) {
            expect(vcRecaptchaServiceSpy.reloadWithFocus).toEqual(false);
        }));
    });
});