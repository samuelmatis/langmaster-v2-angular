'use strict';

angular.module('langmaster.test')

.controller('Test.StartCtrl', function ($rootScope, $state, WordsRepository) {

    var ctrl = this;

    WordsRepository.getWords()
        .then(function(words) {
            ctrl.words = _.map(_.sortBy(words, 'strength'));
        });

});
