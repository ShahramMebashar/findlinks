var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
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
        status: 'pending'
    });
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
            console.log(err);
            res
                .sendStatus(404)
                .end(JSON.stringify(err, null, 2));
            return;
        });

}

module.exports = addlinkController;