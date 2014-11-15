'use strict';

angular.module('langmaster.words')

.controller('Words.ListCtrl', function (WordsRepository) {

    this.searchQuery = '';
    this.words = WordsRepository.getWords();

});
