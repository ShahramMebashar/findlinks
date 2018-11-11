var express = require('express');
var route = express.Router();
var homeController = require('../controllers/home');
route.get('/', homeController);

module.exports = route;