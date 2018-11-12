var express = require('express');
var route = express.Router();
var homeController = require('../../controllers/admin/homeController.js');
route.get('/', homeController);

module.exports = route;