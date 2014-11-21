'use strict';

angular.module('langmaster.common')

.service('TestRepository', function (Restangular) {

    // Restangular service
    var wordsResource = Restangular.service('test');

    // Public API
    this.sendTest = function(words) {
        return wordsResource.post(words);
    };

});
