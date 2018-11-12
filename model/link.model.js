var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;


var linkSchema = new Schema({
    _id: ObjectId,
    url: String,
    title: { 
        type: String, 
        required: true
    },
    logo: String,
    lang: String,
    category: String,
    status: String,
    approved: Boolean,
    hits: {
        type: Number,
        default: 0
    },
    socials:{
        facebook: String,
        twitter: String,
        linkdin: String,
        snapchat: String,
        instagram: String,
        youtube: String,
    },
    createdBy: { type: String, default: 'FindLinks' },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;