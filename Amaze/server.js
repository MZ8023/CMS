var app = require('express')();
var http = require('http').Server(app);
var url = require("url");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/*', function(req, res){
  res.sendFile(__dirname + url.parse(req.url).pathname);
});

http.listen(8989, function() {
  console.log('listening on *:8989');
});