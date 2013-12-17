angular.module('vcRecaptcha', [])
    .factory('vcRecaptchaServiceSpy', RecaptchaServiceSpyFactory)
    .service('vcRecaptchaService', RecaptchaServiceFactory);

function RecaptchaServiceSpyFactory() {
    return {};
}

function RecaptchaServiceFactory(vcRecaptchaServiceSpy) {
    return {
        reload:function(focus) {
            vcRecaptchaServiceSpy.reloadWithFocus = focus;
        }
    };
}