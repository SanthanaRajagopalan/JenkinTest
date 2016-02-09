var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world from node now from jenkins');
});

app.listen(process.env.PORT || 8080);

module.exports = app;
