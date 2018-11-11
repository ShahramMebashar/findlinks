var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

var socialSchema = new Schema({
    id: ObjectId,
    title: String,
    lang: '',
    categoryId: ObjectId,
    facebook: String,
    twitter: String,
    instagram: String,
    linkdin: String,
    snapchat: String,
    youtube: String
});



var Social = mongoose.model('Social', socialSchema);
module.exports = Social;