var express = require('express');
var route = express.Router();
var addLinkContoller = require('../controllers/addlink');
var deleteLinkContoller = require('../controllers/deletelink');
var getLinksController = require('../controllers/getLinksController');


route.get('/', getLinksController);
route.post('/add', addLinkContoller)
route.post('/delete', deleteLinkContoller)

module.exports = route;