'use strict';

angular.module('langmaster.test')

.controller('Test.EndCtrl', function ($rootScope, $state, Test) {

    this.words = Test.resultWords;

});
