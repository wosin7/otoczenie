var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/plain' });
            response.end(data, 'binary');
            });
    } else {
            fs.readFile('./404.jpg', function(err, img) {
            response.writeHead(200, {'Content-Type': 'image/gif' });
            response.end(img, 'binary');
            response.statusCode = 404;
            });
            
    }
});

server.listen(8080);