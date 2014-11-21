'use strict';

angular.module('langmaster.test')

.controller('Test.EndCtrl', function ($rootScope, $state, Test) {

    $rootScope.showNavbar = false;

    var ctrl = this;

    ctrl.words = Test.resultWords;

    ctrl.backToWords = function() {
        $rootScope.showNavbar = true;
        $state.go('words.list');
    };

});
