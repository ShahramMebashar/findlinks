var express = require('express');
var route = express.Router();
var youtubeHomeController = require('../controllers/youtube/youtubeHomeController');

route.get('/', youtubeHomeController);

module.exports = route;