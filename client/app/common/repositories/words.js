'use strict';

angular.module('langmaster.common')

.service('WordsRepository', function() {

    this.getWords = function() {
        return [{
            word: 'word 1',
            translation: 'translation 1',
            score: 1
        }, {
            word: 'word 2',
            translation: 'translation 2',
            score: 2
        }];
    };
});
