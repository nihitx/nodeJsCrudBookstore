var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    create : {type : Date , default : Date.now}
});

module.exports = mongoose.model('Genre', schema);