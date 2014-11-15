'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

/**
 * Schema
 */
var WordSchema = new Schema({
    _creator: { type: ObjectId, ref: 'User' },
    word: { type: String, required: true },
    translation: { type: String, required: true },
    strength: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Word', WordSchema);
