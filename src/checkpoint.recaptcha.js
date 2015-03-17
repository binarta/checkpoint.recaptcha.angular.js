angular.module('checkpoint.recaptcha', ['checkpoint', 'notifications', 'vcRecaptcha'])
    .run(['registrationRequestMessageMapperRegistry', function (registrationRequestMessageMapperRegistry) {
        registrationRequestMessageMapperRegistry.add(function(scope) {
            return function(it) {
                it.captcha = scope.captcha;
                return it;
            }
        });
    }])
    .run(['topicRegistry', 'vcRecaptchaService', function(topicRegistry, vcRecaptchaService) {
        topicRegistry.subscribe('checkpoint.registration.rejected', function() {
            vcRecaptchaService.reload(false);
        });
    }]);