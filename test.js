var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./app');

var should = chai.should();

chai.use(chaiHttp);

describe('Test', function() {
	it('should show index page / GET', function(done) {
		chai.request("localhost:8080")
			.get('/index')
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.html;
				done();
			})
	});
});