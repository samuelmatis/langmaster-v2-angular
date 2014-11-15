'use strict';

angular.module('langmaster.common')

.service('WordsRepository', function (Restangular) {

    // Restangular service
    var wordsResource = Restangular.service('words');

    // Public API
    this.getWords = function() {
        return wordsResource.one().get();
    };

    this.createWord = function(form) {
        return wordsResource.post(form);
    };

});
