var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello new world from node now from jenkins 2');
});

app.listen(process.env.PORT || 8080);

module.exports = app;
