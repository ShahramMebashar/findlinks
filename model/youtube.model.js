var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var youtubeSchemma = new Schema({
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


var Youtube = mongoose.model('Youtube', youtubeSchemma);
module.exports = Youtube;