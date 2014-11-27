'use strict';

angular.module('langmaster.words')

.controller('Words.AddCtrl', function ($rootScope, WordsRepository) {

    var ctrl = this;

    ctrl.word = {};

    ctrl.addWord = function(form) {
        ctrl.submitted = true;
        if (form.$valid) {
            WordsRepository.createWord(ctrl.word)
                .then(function(resWord) {
                    $rootScope.$emit('wordCreated', resWord);
                    ctrl.word = '';
                    form.$setPristine();
                    ctrl.submitted = false;
                });
        }
    };

});
