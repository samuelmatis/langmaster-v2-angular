'use strict';

angular.module('langmaster.words')

.controller('Words.EditCtrl', function ($rootScope, $state, $stateParams, WordsRepository) {

    var ctrl = this;

    ctrl.form = {};

    WordsRepository.findById($stateParams.id)
        .then(function(word) {
            ctrl.form = word;
        });

    ctrl.send = function(word) {
        word.put()
            .then(function() {
                return $state.go('words.list');
            })
            .catch(function(err) {
                ctrl.errors = {};
                ctrl.errors = err.data;
            });
    };

});
