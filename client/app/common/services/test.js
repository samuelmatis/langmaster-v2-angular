'use strict';

angular.module('langmaster.common')

.factory('Test', function (WordsRepository, TestRepository) {

    /**
     * Configuration
     */
    var defaultConfig = {
        currentStep: 1,
        totalSteps: 10
    };

    /**
     * Private functions
     */
    function compareWords(first, second) {
        for (var result = 0, i = first.length; i--;) {
            if (typeof second[i] === 'undefined' || first[i] === second[i]);
            else if (first[i].toLowerCase() === second[i].toLowerCase()) result++;
            else result += 4;
        }

        return 1 - (result + 4 * Math.abs(first.length - second.length))/(2 * (first.length + second.length));
    }

    function calculatePoints(strength, score) {
        var points = 0;

        if (strength === 0 || strength === 1) {

            if (score === 1) points = 10;
            else if (score < 1 && score > 0.7) points = 5;
            else points = -5

        } else if (strength === 2) {

            if (score === 1) points = 8;
            else if (score < 1 && score > 0.7) points = 5;
            else points = -5

        } else if (strength === 3) {

            if (score === 1) points = 8;
            else if (score < 1 && score > 0.7) points = 5;
            else points = -5

        } else if (strength === 4 || strength === 5) {

            if (score === 1) points = 3;
            else if (score < 1 && score > 0.7) points = 1;
            else points = -1

        }

        return points;
    }

    function resultClass(score) {
        var resultClass = '';

        if (score === 1) {
            resultClass = 'success';
        } else if (score < 1 && score > 0.7) {
            resultClass = 'warning';
        } else {
            resultClass = 'danger';
        }

        return resultClass;
    }

    /**
     * Public API
     */
    return {
        currentStep: defaultConfig.currentStep,
        totalSteps: defaultConfig.totalSteps,
        words: [],
        resultWords: [],

        getWords: function(cb) {
            WordsRepository.getWords()
                .then(function(words) {
                    words = _.map(_.sortBy(words, 'strength'));
                    words = _.first(words, 5);

                    cb(words);
                });
        },

        submitForm: function(word, translation) {
            var score = compareWords(word.translation, translation),
                points = calculatePoints(word.strength),
                returnClass = resultClass(score);

            var newWord = {
                id: word._id,
                points: points
            };

            if (_.find(this.words, { id: newWord.id })) {
                this.words.filter(function(word) {
                    return word.id === newWord.id;
                })[0].points += newWord.points;
            } else {
                this.words.push(newWord);
            }

            return returnClass;
        },

        nextWord: function() {
            this.currentStep++;
        },

        sendTest: function() {
            var that = this;
            TestRepository.sendTest({'words': this.words})
                .then(function(result) {
                    that.resultWords = result;
                });
        },

        clearTest: function() {
            this.currentStep = defaultConfig.currentStep;
            this.totalSteps = defaultConfig.totalSteps;
            this.words = [];
        }
    };
});
