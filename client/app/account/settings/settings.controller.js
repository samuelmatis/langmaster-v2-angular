'use strict';

angular.module('langmaster.account')

.controller('Account.SettingsCtrl', function (Auth) {
    var ctrl = this;

    ctrl.changePassword = function(form) {
        ctrl.submitted = true;
        if(form.$valid) {
            Auth.changePassword(ctrl.user.oldPassword, ctrl.user.newPassword)
                .then(function() {
                    ctrl.passwordMessage = 'Password successfully changed.';
                })
                .catch(function() {
                    form.password.$setValidity('mongoose', false);
                    ctrl.passwordErrors = {
                        other: 'Incorrect password'
                    };
                    ctrl.passwordMessage = '';
                });
        }
  };
});
