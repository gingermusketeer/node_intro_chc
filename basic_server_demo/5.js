'use strict';

var http = require('http');

var server = http.createServer(function(req, res){
  res.end('Hello CHC.js. The time is: ' + Date.now());
});

server.listen(8080);