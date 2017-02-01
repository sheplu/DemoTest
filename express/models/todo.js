var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	message: String,
	title: String
});

module.exports = mongoose.model('Todo', Todo)