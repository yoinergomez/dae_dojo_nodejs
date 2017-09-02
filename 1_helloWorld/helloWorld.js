var http = require("http"),
    fs = require("fs");

//Example sync read
/*
var html = fs.readFileSync("./index.html");

http.createServer(function (req, res) {
  res.write(html);
  res.end();
}).listen(8081);
*/
console.log("1");

http.createServer(function (req, res) {
  console.log("2");
  fs.readFile("./index.html", function(err, html){
    res.write(html);
    res.end();
    console.log("3");
  });
  console.log("4");
}).listen(8081);
console.log("5");
