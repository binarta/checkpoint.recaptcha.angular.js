angular.module('checkpoint.recaptcha', ['checkpoint'])
    .run(InstallCaptchaMapperForRegistrationRequestMessages)
    .run(function(topicRegistry, vcRecaptchaService) {
        topicRegistry.subscribe('checkpoint.registration.rejected', function() {
            vcRecaptchaService.reload(false);
        });
    });

function InstallCaptchaMapperForRegistrationRequestMessages(registrationRequestMessageMapperRegistry) {
    registrationRequestMessageMapperRegistry.add(function(scope) {
        return function(it) {
            it.captcha = scope.captcha;
            return it;
        }
    });
}