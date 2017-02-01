var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* localhost:3000/test/lyon/paris */
router.get('/test/:id/:val', function(req, res, next) {
	var result = req.params.id;
	var data = req.params.val;
	res.render('test', {
		title: "Test Param page",
		name: "Jean",
		result: result + ' ' + data
	})
});

/* localhost:3000/test?id=lyon&val=paris */
router.get('/test', function(req, res, next) {
	var result = req.query.id;
	var data = req.query.val;
	res.render('test', {
		title: "Test Query page",
		name: "Jean",
		result: result + ' ' + data
	})
});

/* localhost:3000/test?id=lyon&val=paris */
router.post('/test', function(req, res, next) {
	var result = req.body.id;
	var data = req.body.val;
	res.render('test', {
		title: "Test POST page",
		name: "Jean",
		result: result + ' ' + data
	})
});

router.post('/todo', function(req, res, next) {
	var message = req.body.message;
	var title = req.body.title;
	var todo = new Todo({
		message: message,
		title: title
	}).save(function(err, todo) {
		if(err) {
			res.json(err);
		}
		res.json(todo);
	});
});

module.exports = router;
