var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var channelSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    url: String,
    description: String,
    subscribers: Number,
    logo: String,
    lang: String,
    hints: Number
});


var Channel = mongoose.model('Channel', channelSchema);
module.exports = Channel;