
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    published: Boolean,
    comments: [{message:String}],
    meta: {
        votes:Number,
        fav:Number
    }

});

module.exports = mongoose.model('book',BookSchema);