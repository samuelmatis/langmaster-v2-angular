'use strict';

angular.module('langmaster.test')

.controller('Test.StartCtrl', function ($rootScope, $state, WordsRepository) {

    $rootScope.showNavbar = false;

    var ctrl = this;

    WordsRepository.getWords()
        .then(function(words) {
            ctrl.words = _.map(_.sortBy(words, 'strength'));
        });

    ctrl.backToWords = function() {
        $rootScope.showNavbar = true;
        $state.go('words.list');
    };

});
