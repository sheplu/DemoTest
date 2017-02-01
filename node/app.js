var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	
	if(page == '/index') {
		res.writeHead(200, {
			"Content-Type": "text/plain"
		});
		res.write("Index");
	}
	else if(page == '/contact') {
		res.writeHead(200, {
			"Content-Type": "text/plain"
		});
		res.write("Contact");
	} 
	else if(page == '/redirect') {
		res.writeHead(302, {
			"Location": "http://www.google.fr"
		});
		res.write("Contact");
	}
	else {
		res.writeHead(404, {
			"Content-Type": "text/plain"
		});
		res.write("Error: Page Not found");
	}

	res.end();
});

server.listen(3000);