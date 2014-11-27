'use strict';

angular.module('langmaster.account')

.controller('Account.ProfileCtrl', function (Auth, Modal, $state) {
    var ctrl = this;

    ctrl.user = Auth.getCurrentUser();

    ctrl.profileForm = {
        location: ctrl.user.location || '',
        nativeLanguage: ctrl.user.nativeLanguage || '',
        bio: ctrl.user.bio || ''
    };

    ctrl.changePassword = function(form) {
        ctrl.submitted = true;
        if(form.$valid) {
            Auth.changePassword(ctrl.passwordForm.oldPassword, ctrl.passwordForm.newPassword)
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

    ctrl.updateProfile = function(form) {
        if (form.$valid) {
            Auth.updateProfile(ctrl.profileForm)
                .then(function() {
                    ctrl.profileMessage = 'Profile successfully updated.';
                });
        }
    }

    ctrl.removeAccount = Modal.confirm.delete(function(user) {
        Auth.removeAccount()
            .then(function() {
                Auth.logout();
                $state.go('login');
            });
    });
});
