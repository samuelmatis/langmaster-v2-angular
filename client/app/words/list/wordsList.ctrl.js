'use strict';

angular.module('langmaster.words')

.controller('Words.ListCtrl', function (WordsRepository) {

    var ctrl = this;

    ctrl.searchQuery = '';
    ctrl.words = [];

    WordsRepository.getWords()
        .then(function(words) {
            ctrl.words = words;
        });

});
