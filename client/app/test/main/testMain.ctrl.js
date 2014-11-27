'use strict';

angular.module('langmaster.test')

.controller('Test.MainCtrl', function ($rootScope, $state, Test) {

    var ctrl = this;

    Test.getWords(function(words) {
        ctrl.words = words;
        ctrl.generateRandomWord();
    });

    ctrl.form = {};
    ctrl.testResult = false;
    ctrl.resultClass = '';
    ctrl.currentStep = Test.currentStep;
    ctrl.totalSteps = Test.totalSteps;

    $rootScope.$watch(function() {
        return Test.currentStep;
    }, function(step) {
        ctrl.currentStep = step;

        if (ctrl.currentStep > Test.totalSteps) {
            ctrl.endTest();
        }
    });

    ctrl.generateRandomWord = function() {
        var newWord = _.sample(ctrl.words);

        if (ctrl.words.length === 1) {
            ctrl.currentWord = newWord;
        } else {
            if (ctrl.currentWord === newWord ) {
                ctrl.generateRandomWord();
            } else {
                ctrl.currentWord = newWord;
            }
        }
    };

    ctrl.submitForm = function() {
        var translation = ctrl.form.word;
        var resultClass = Test.submitForm(ctrl.currentWord, translation);

        ctrl.resultClass = resultClass;
        ctrl.testResult = true;
    };

    ctrl.nextWord = function() {
        ctrl.testResult = false;
        ctrl.resultClass = '';
        ctrl.form.word = '';
        ctrl.generateRandomWord();

        Test.nextWord();
    };

    ctrl.endTest = function() {
        Test.sendTest();
        $state.go('test.end');
    };

});
