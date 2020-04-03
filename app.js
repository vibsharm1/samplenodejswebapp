var msg = 'Hello World';
console.log(msg);
var http = require('http');
var os = require('os');
var hostname = os.hostname();
var fs = require('fs');

var qs = require('qs');
var moment = require('moment');

var port = process.env.PORT || 3000;


function handleRequest (request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  fs.readFile('./index.html', function (err, html){
    if (err) {
        response.writeHead(404);
        respone.write('Whoops! File not found!');
    } else {
        response.write(html);
    }
    response.end('<h2 style="text-align: center;">Sample Node.js Sample Application. Serving requests from [' + hostname + ']. Request URL:' + request.url + '</h2>');
  });
  
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
  console.log('Server listening on port', port);
});