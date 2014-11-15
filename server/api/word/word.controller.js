/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /words              ->  index
 * POST    /words              ->  create
 * GET     /words/:id          ->  show
 * PUT     /words/:id          ->  update
 * DELETE  /words/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Word = require('./word.model');

var handleError = function(res, err) { return res.send(500, err); };
var validationError = function(res, err) { return res.json(422, err);};

// Get list of words
exports.index = function(req, res) {
    Word.find({ _creator: req.user._id })
        .exec(function(err, words) {
            if (err) return handleError(res, err);

            return res.json(200, words);
        });
};

// Get a single word
exports.show = function(req, res) {
    Word.findOne({ _creator: req.user._id, _id: req.params.id})
        .exec(function(err, word) {
            if (err) return handleError(res, err);
            if (!word) return res.send(404);

            return res.json(word);
        });
};

// Creates a new word in the DB.
exports.create = function(req, res) {
    var newWord = new Word(req.body);
    newWord._creator = req.user._id;

    newWord.save(function(err) {
        if (err) return validationError(res, err);

        return res.json(newWord);
    });
};

// Updates an existing word in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }

    Word.findOne({ _creator: req.user._id, _id: req.params.id })
        .exec(function (err, word) {
            if (err) { return handleError(res, err); }
            if (!word) { return res.send(404); }

            var updated = _.merge(word, req.body);

            updated.save(function (err) {
                if (err) { return validationError(res, err); }
                return res.json(200, word);
            });
        });
};

// Deletes a word from the DB.
exports.destroy = function(req, res) {
    Word.findOne({ _creator: req.user._id, _id: req.params.id })
        .remove(function(err) {
            if (err) return handleError(res, err);

            return res.send(204);
        });
};
