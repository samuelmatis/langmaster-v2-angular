'use strict';

angular.module('langmaster.account')

.controller('Account.SignupCtrl', function (Auth, $window, $state) {
    var ctrl = this;

    ctrl.user = {};
    ctrl.errors = {};

    ctrl.register = function(form) {
        ctrl.submitted = true;

        if(form.$valid) {
            Auth.createUser({
                name: ctrl.user.name,
                email: ctrl.user.email,
                password: ctrl.user.password
            })
            .then( function() {
                $state.go('');
            })
            .catch( function(err) {
                err = err.data;
                ctrl.errors = {};

                // Update validity of form fields ctrl match the mongoose errors
                angular.forEach(err.errors, function(error, field) {
                    form[field].$setValidity('mongoose', false);
                    ctrl.errors[field] = error.message;
                });
            });
        }
    };

    ctrl.loginOauth = function(provider) {
        $window.location.href = '/auth/' + provider;
    };
});
