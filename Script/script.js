var http = require('http');

/// Solution of N1
// http.createServer(function (req, res) {
//     res.writeHead(200,
//         { 'Content-Type': 'text/html' });
   // res.end('Hello World!');
// }).listen(8080);

// Solution of N2
// var dt = require('./myModule');
// http.createServer(function (req, res) {
//     res.writeHead(200,
//         { 'Content-Type': 'text/html' });
//     res.write("The date and time are currently: " + dt.myDate());
//     res.end();
// }).listen(8080);


//// Solution of N3
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
    }).listen(8080); 