var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

var liveTvSchema = new Schema({
    _id: ObjectId,
    url: String,
    title: { 
        type: String, 
        required: true
    },
    categories: [],
    logo: String,
    lang: String,
    status: String,
    approved: Boolean,
    socials:{
        facebook: String,
        twitter: String,
        linkdin: String,
        snapchat: String,
        instagram: String,
        youtube: String,
    },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
});

var LiveTv = mongoose.model('LiveTv', liveTvSchema);

module.exports = LiveTv;