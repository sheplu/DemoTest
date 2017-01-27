var http = require('http');
var url = require('url');

var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	if(page == '/index') {
		console.log("test");
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("hello world");
	}
	else if (page == '/contact') {
		console.log("test");
		res.write("Contact page");
	}
	else {
		console.log("test");
		res.write("Error");
	}
	res.end()
});

server.listen(port);