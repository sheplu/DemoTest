var User = require('../models/user');
var jwt = require('jsonwebtoken');

exports.getToken = function(user) {
	return jwt.sign(user, "azertyuiop");
}

exports.verifyUser = function(req, res, next) {
	var token = req.body.token 
		|| req.query.token 
		|| req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, "azertyuiop", function(err, decoded) {
			if (err) {
				res.json(err);
			}
			req.decoded = decoded;
			next();
		})
	}
	else {
		res.json("No token provided!");
	}
}