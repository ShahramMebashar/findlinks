var express = require('express');
var route = express.Router();
var addSocialContoller = require('../controllers/addsocial');

route.get('/', addSocialContoller);

module.exports = route;