var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
var request =  require('request');

router.all("*", function(req, res, next) {
	console.log("isLogged");
	req.isLogged = "user";
	res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
	next();
});

router.all("/admin", function(req, res, next) {
	console.log("isAdmin");
	next();
});

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
});;

router.get('/todo/all', function(req, res, next) {
	console.log(req.isLogged);
	Todo.find({}, function(err, todos) {
		if (err) {
			res.json(err);
		}
		res.json(todos);
	})
});

router.get('/todo/:id', function(req, res, next) {
	Todo.find({
		_id: req.params.id
	}, function(err, todos) {
		if (err) {
			res.json(err);
		}
		res.json(todos);
	})
});

router.delete('/todo', function(req, res, next) {
	Todo.remove({
		_id: req.body.id
	}, function(err) {
		if (err) {
			res.json(err)
		}
		res.json({
			status: 200,
			message: "Delete successfull"
		})
	})
});

router.put('/todo', function(req, res, next) {
	Todo.findOneAndUpdate({
		_id: req.body.id
	},
	{
		title: req.body.title,
		message: req.body.message	
	}, 
	{
		new: true
	}, 
	function(err, todo) {
		if(err) {
			res.json(err);
		}
		res.json(todo);
	})
})



router.get('/api', function(req, res, next) {
	request.get('http://graph.facebook.com/me', 
		function (err, response, body) {
			var api = JSON.parse(body);
			var status = api.error.code;
			res.json(status);
	});
});

module.exports = router;