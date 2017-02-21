var http = require('http');
var url = require('url');

var port = 8080;


var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;

	if(page == "/index") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("Index");
	}
	else if(page == "/contact") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("Contact");
	}
	else {
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("Error");
	}
	res.end();
});

server.listen(port, function() {
	console.log("Server running on port " + port);
})