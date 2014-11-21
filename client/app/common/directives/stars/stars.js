'use strict';

angular.module('langmaster.common')

.directive('lmStars', function ($timeout) {
    return {
        restrict: 'A',
        templateUrl: 'app/common/directives/stars/stars.html',
        link: function(scope, element, attrs) {
            scope.stars = attrs.lmStars;

            scope.range = function(n) {
                return new Array(n);
            };
        }
    };
});
