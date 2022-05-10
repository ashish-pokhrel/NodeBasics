const http = require('http');
const customModule = require('./index')

function createServer(request, response) {
   response.writeHead(200, { 'Content-Type': 'text/Html' });
   response.write("Hello World" + customModule.myDate());
   response.end();
}

http.createServer(createServer).listen(8040);