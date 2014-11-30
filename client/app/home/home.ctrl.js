'use strict';

angular.module('langmaster.home')

.controller('HomeCtrl', function (Auth) {

    var ctrl = this;

    ctrl.isLoggedIn = Auth.isLoggedIn;

});
