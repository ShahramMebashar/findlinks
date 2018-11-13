var Link     = require('../model/link.model');

module.exports = async function (req, res, next) {  // jshint ignore:line
    var query = {};
    if(!!req.query.q) {
        query = req.query.q
        .split(',')
        .reduce( function (old, param) {
            return Object.assign(old, {
                [param]: true
            });
        }, {});
    }
    try{
        //ony fields of query will be fetched
        const getLinks = await Link.find({}, query);  // jshint ignore:line
        res.status(200).json(getLinks)
    }
    catch(err) {
        next(err);
    }
}