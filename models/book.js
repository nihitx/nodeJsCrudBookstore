var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    pages: {type: String, required: true},
    image_url: {type: String, required: true},
    buy_url: {type: String, required: true},
    create : {type : Date , default : Date.now}
});

module.exports = mongoose.model('Book', schema);