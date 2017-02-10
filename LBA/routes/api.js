var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json({
		'status': 200,
		'message': 'Welcome on LBA API'
	});
});

router.post('/', function(req, res, next) {
	new User({
		username: req.body.username,
		password: req.body.password,
		mail: req.body.mail,
		age: req.body.age
	}).save(function(err, user) {
		if (err) {
			res.json(err);
		}
		res.json(user);
	});
});

router.get("/all", function(req, res, next) {
	User.find({}, function(err, users) {
		if(err) {
			res.json(err);
		}
		res.json(users);
	});
});

router.get("/:mail", function(req, res, next) {
	User.findOne({mail: req.params.mail}, function(err, users) {
		if(err) {
			res.json(err);
		}
		res.json(users);
	});
});

router.delete('/:mail', function(req, res, next) {
	User.findOneAndRemove({mail: req.params.mail}, function(err, user) {
		if (err) {
			res.json(err);
		}
		res.json(user);
	});
});

router.put('/', function(req, res, next) {
	User.findOneAndUpdate({
		mail:req.body.mailOld
	},
	{
		$set: req.body
	},
	{
		new: true
	}, function(err, user) {
		if (err) {
			res.json(err);
		}
		res.json(user);
	});
});

module.exports = router;
