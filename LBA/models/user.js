var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username: String,
	password: String,
	mail: {
		type: String,
		unique: true
	},
	age: Number
});

module.exports = mongoose.model('User', User);