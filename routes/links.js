var express = require('express');
var route = express.Router();
var addLinkContoller = require('../controllers/addlink');
var deleteLinkContoller = require('../controllers/deletelink');
var links = require('../controllers/links');


route.get('/', links);
route.post('/add', addLinkContoller)
route.post('/delete', deleteLinkContoller)

module.exports = route;
