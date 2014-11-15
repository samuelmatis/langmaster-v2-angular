'use strict';

angular.module('langmaster.words')

.controller('Words.ListCtrl', function ($rootScope, WordsRepository) {

    var ctrl = this;

    ctrl.searchQuery = '';
    ctrl.words = [];

    WordsRepository.getWords()
        .then(function(words) {
            ctrl.words = words;
        });

    // Update the words list when a new word is created
    $rootScope.$on('wordCreated', function(ev, word) {
        word.strength = 0;
        ctrl.words.push(word);
    });

    ctrl.removeWord = function(word) {
        return WordsRepository.removeWord(word)
                .then(function() {
                    ctrl.words = _.without(ctrl.words, word);
                });
    };

});
