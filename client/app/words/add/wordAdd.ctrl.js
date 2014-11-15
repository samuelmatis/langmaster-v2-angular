'use strict';

angular.module('langmaster.words')

.controller('Words.AddCtrl', function ($rootScope, WordsRepository) {

    var ctrl = this;

    ctrl.word = {};

    ctrl.addWord = function(word) {
        WordsRepository.createWord(word)
            .then(function() {
                $rootScope.$emit('wordCreated', word);
            });
    };

});
