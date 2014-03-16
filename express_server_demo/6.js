'use strict';

var express = require('express');

var app  = express();

app.use(app.router);

app.get('/', function(req, res){
  res.send('Hi CHC.js');
});

app.listen(8090);