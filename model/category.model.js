var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;


var categorySchema = new Schema({
    _id: ObjectId,
    title: { 
        type: String, 
        required: true, 
        unique: true
    },
    slug: String
});

var Category = mongoose.model('Category', categorySchema);


module.exports = Category;