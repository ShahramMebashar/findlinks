var express = require('express');
var route = express.Router();
var liveTvHomeContoller = require('../controllers/livetv/livetvHomeController');

route.get('/', liveTvHomeContoller);

module.exports = route;