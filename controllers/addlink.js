var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var Link = require('../model/link.model');

function addlinkController(req, res, next) {
    const {
        url,
        title,
        lang,
        logo,
        category,
        socials
    } = req.body;
    var website = new Link({
        url,
        title,
        lang,
        logo,
        category,
        socials,
        status: 'pending',
        createdAt: moment().format('MMMM DD YYYY')
    });
    if(url === '' || title === '') {
        res.status(400).json({
            message: 'url and title fields are required'
        });
    }
    Link
        .insertMany(website)
        .then(function (result) {
            var showResult = {
                status: result.length >= 1
                    ? 'sucess'
                    : 'fail'
            }
            res
                .status(200)
                .json(showResult);
        })
        .catch(function (err) {
            res
                .status(400)
                .json(err);
        });

}

module.exports = addlinkController;