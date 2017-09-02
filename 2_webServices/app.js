var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');

var app = express();
let PORT = 8081;
app.listen(PORT, function () {
  console.log("Listen port: ", PORT);
});

app.use(bodyParser.urlencoded({extend:  true}));
app.use('/', routes);
