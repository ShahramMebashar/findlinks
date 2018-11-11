var express = require('express');
var route = express.Router();
var addLinkContoller = require('../controllers/addlink');
var deleteLinkContoller = require('../controllers/deletelink');
var getLinkController = require('../controllers/getlinks');


route.get('/', getLinkController);
route.post('/add', addLinkContoller)
route.post('/delete', deleteLinkContoller)

module.exports = route;