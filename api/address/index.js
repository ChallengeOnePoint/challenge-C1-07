'use strict';

var express = require('express');
var controller = require('./address.controller');
var config = require('../../config/environment');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
