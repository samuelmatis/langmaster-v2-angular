'use strict';

angular.module('langmaster.common')

.directive('shakeForm', function($animate) {
    console.log($animate);
    return {
        require: '^form',
        scope: {
            submit: '&',
            submitted: '='
        },
        link: function(scope, element, attrs, form) {
            element.on('submit', function() {
                scope.$apply(function() {
                    if (form.$valid) return scope.submit();

                    scope.submitted = true;

                    $animate.addClass(element, 'animate-shake').then(function() {
                        $animate.removeClass(element, 'animate-shake');
                    });
                });
            });
        }
    };
});
