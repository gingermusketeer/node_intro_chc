'use strict';

var http = require('http');

var WAIT_TIME = 10*1000;
var server = http.createServer(function(req, res){
  var requestTime = Date.now();

  while(Date.now() - requestTime < WAIT_TIME){
    console.log('waiting');
  }
  res.end('Hello CHC.js');
});

server.listen(8080);