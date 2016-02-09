var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello new world from node now from jenkins 3');
});

app.listen(process.env.PORT || 8080);

module.exports = app;
