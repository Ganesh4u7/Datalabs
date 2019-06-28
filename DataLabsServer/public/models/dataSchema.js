var mongoose = require('mongoose');
var schema = mongoose.Schema;

var customerDataSchema = new schema({
    name: String,
    phoneno: Number,
    email:String,
    address:String
});

module.exports = customerDataSchema;