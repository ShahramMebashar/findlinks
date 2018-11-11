var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;


var linkSchema = new Schema({
    id: ObjectId,
    type: String,
    createdBy: {
        type: String,
        default: 'Shahram Mebashar'
    },
    title: {
        tpye: String,
        required: true
    },
    logo: String,
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;