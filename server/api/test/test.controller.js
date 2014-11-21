'use strict';

var _ = require('lodash');
var Word = require('../word/word.model');

var handleError = function(res, err) { return res.send(500, err); };
var validationError = function(res, err) { return res.json(422, err);};

// Send test
exports.sendTest = function(req, res) {

    var done = 0;
    var result = [];
    var success = 0;

    _.forEach(req.body.words, function(reqWord) {

        Word.findById(reqWord.id, function(err, word) {

            word.lastTest = Date.now();
            word.lastPoints += reqWord.points;

            if (word.strength === 0 && word.lastPoints >= 30) {
                word.strength += 1;
                success = 1
            } else if (word.strength === 1 && word.lastPoints >= 40) {
                word.strength += 1;
                success = 1
            } else if (word.strength === 1 && word.lastPoints <= -50) {
                word.strength -= 1;
                success = -1
            } else if (word.strength === 2 && word.lastPoints >= 60) {
                word.strength += 1;
                success = 1
            } else if (word.strength === 2 && word.lastPoints <= -40) {
                word.strength -= 1;
                success = -1
            } else if (word.strength === 3 && word.lastPoints >= 80) {
                word.strength += 1;
                success = 1
            } else if (word.strength === 3 && word.lastPoints <= -30) {
                word.strength -= 1;
                success = -1
            } else if (word.strength === 4 && word.lastPoints >= 100) {
                word.strength += 1;
                success = 1
            } else if (word.strength === 4 && word.lastPoints <= -20) {
                word.strength -= 1;
                success = -1
            } else if (word.strength === 5 && word.lastPoints <= -10) {
                word.strength -= 1;
                success = -1
            } else {
                success = 0;
            }

            word.save(function(err) {
                if (err) return handleError(res, err);

                word.success = success;
                result.push(word);

                done++;
                if (done == req.body.words.length) {
                    return res.json(200, result);
                }
            });

        });

    });
};
