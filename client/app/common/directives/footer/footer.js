'use strict';

angular.module('langmaster.common')

.directive('lmFooter', function() {
    return {
        templateUrl: 'app/common/directives/footer/footer.html',
        replace: true
    };
});
