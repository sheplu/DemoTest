var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose =  require('passport-local-mongoose');

var User = new Schema({
	username: String,
	password: String,
	mail: {
		type: String,
		unique: true
	},
	age: Number
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);