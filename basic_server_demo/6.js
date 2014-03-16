'use strict';

var http = require('http');

var server =http.createServer(function(req, res){
  console.log(req.url);
  if(req.url === '/greet'){
    res.end('Hello CHC.js');
  } else {
    res.statusCode = 404;
    res.end('wow!');
  }
  
});

server.listen(8080);
