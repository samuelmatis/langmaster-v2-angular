'use strict';

var _ = require('lodash');
var async = require('async');
var Word = require('../word/word.model');

var handleError = function(res, err) { return res.send(500, err); };
var validationError = function(res, err) { return res.json(422, err);};

// Send test
exports.sendTest = function(req, res) {

    var result = [];
    var success = 0;

    var words = req.body.words;

    async.each(words, updateWord, function(err) {
        if (err) handleError(res, err);

        return res.json(result);
    });

    function updateWord(reqWord, callback) {
        Word.findById(reqWord.id, function(err, word) {

            word.lastTest = Date.now();
            word.lastPoints += reqWord.points;

            if (word.strength === 0 && word.lastPoints >= 30) {
                word.strength += 1;
                success = 1;
            } else if (word.strength === 1 && word.lastPoints >= 40) {
                word.strength += 1;
                success = 1;
            } else if (word.strength === 1 && word.lastPoints <= -50) {
                word.strength -= 1;
                success = -1;
            } else if (word.strength === 2 && word.lastPoints >= 60) {
                word.strength += 1;
                success = 1;
            } else if (word.strength === 2 && word.lastPoints <= -40) {
                word.strength -= 1;
                success = -1;
            } else if (word.strength === 3 && word.lastPoints >= 80) {
                word.strength += 1;
                success = 1;
            } else if (word.strength === 3 && word.lastPoints <= -30) {
                word.strength -= 1;
                success = -1;
            } else if (word.strength === 4 && word.lastPoints >= 100) {
                word.strength += 1;
                success = 1;
            } else if (word.strength === 4 && word.lastPoints <= -20) {
                word.strength -= 1;
                success = -1;
            } else if (word.strength === 5 && word.lastPoints <= -10) {
                word.strength -= 1;
                success = -1;
            } else {
                success = 0;
            }

            word.save(function(err) {
                if (err) return handleError(res, err);

                var resultWord = {
                    word: word.word,
                    translation: word.translation,
                    lastPoints: word.lastPoints,
                    strength: word.strength,
                    success: success
                };

                result.push(resultWord);

                callback();
            });

        });
    }
};
