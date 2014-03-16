'use strict';

var http = require('http');

var WAIT_TIME = 10*1000;
var server = http.createServer(function(req, res){
  setTimeout(function wait10(){
    res.end('Hello CHC.js');
  }, WAIT_TIME);
});

server.listen(8080);