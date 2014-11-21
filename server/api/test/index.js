'use strict';

var express = require('express');
var controller = require('./test.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', auth.isAuthenticated(), controller.sendTest);

module.exports = router;
