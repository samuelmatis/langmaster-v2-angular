'use strict';

angular.module('langmaster.common')

.directive('lmAutofocus', function ($timeout) {
    return function(scope, element) {
        $timeout(function() {
            element[0].focus();
        });
    };
});
