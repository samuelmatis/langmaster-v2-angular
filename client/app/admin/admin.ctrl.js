'use strict';

angular.module('langmaster.admin')

.controller('Admin.AdminCtrl', function (User, Modal) {

    var ctrl = this;

    ctrl.users = [];
    ctrl.loaded = false;

    User.query().$promise.then(function(users) {
        ctrl.users = users;
        ctrl.loaded = true;
    });

    ctrl.delete = Modal.confirm.delete(function(user) {
        User.remove({ id: user._id });
        ctrl.users = _.without(ctrl.users, user);
    });

});
