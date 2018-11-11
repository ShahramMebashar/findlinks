var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Link = require('../model/link.model');

function addlinkController(req, res) {
    var link = new Link({
        title: 'test',
        url: 'https://google.com',
        lang: 'kurdishs',
        status: 'pending'
    });

    Link
    .insertMany(link)
    .then(function (result) {
        var showResult = {
            status: result.length >= 1 ? 'sucess' : 'fail'
        }
        res.json(showResult);
    })
    .catch(function (err) {
        console.log(err);
        res.sendStatus(404).end(JSON.stringify(err, null, 2));
    });

}


module.exports = addlinkController;