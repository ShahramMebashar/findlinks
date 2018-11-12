var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

function addlinkController(req, res, next) {
    const {
        url,
        title,
        lang,
        logo,
        category,
        socials
    } = req.body;

    var Link = require('../model/link.model');
    var website = new Link({
        url,
        title,
        lang,
        logo,
        categories: [category],
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