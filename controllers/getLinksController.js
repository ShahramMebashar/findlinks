var mongoose = require('mongoose');
var Link     = require('../model/link.model');

module.exports = async function (req, res, next) {
    var query = {};
    if(!!req.query.q) {
        query = req.query.q
        .split(',')
        .reduce( function (old, param) {
            return Object.assign(old, {
                [param]: true
            });
        }, {});
        console.log({...query})
    }
    try{
        //ony fields of query will be fetched
        const getLinks = await Link.find({}, query);
        res.status(200).json(getLinks)
    }
    catch(err) {
        next(err);
    }
}