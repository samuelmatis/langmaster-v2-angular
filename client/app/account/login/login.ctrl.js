'use strict';

angular.module('langmaster.account')

.controller('Account.LoginCtrl', function (Auth, $window, $state) {
    var ctrl = this;

    ctrl.user = {};
    ctrl.errors = {};

    ctrl.login = function(form) {
        ctrl.submitted = true;

        if(form.$valid) {
            Auth.login({
                email: ctrl.user.email,
                password: ctrl.user.password
            })
            .then( function() {
                $state.go('words.list');
            })
            .catch( function(err) {
                ctrl.errors.other = err.message;
            });
        }
    };

    ctrl.loginOauth = function(provider) {
        $window.location.href = '/auth/' + provider;
    };
});
