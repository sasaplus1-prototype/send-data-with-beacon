'use strict';

process.on('uncaughtException', function(err) {
  console.error('uncaughtException');
  console.error(err);

  process.exit(1);
});

var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.disable('x-powered-by');

app.use(bodyParser.text());

app.post('/', function(req, res) {
  console.log(req.body);

  res.sendStatus(204);
});

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('server starting at 127.0.0.1:3000');
});
