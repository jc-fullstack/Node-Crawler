var express = require('express');
var app = express.createServer();

app.get('/timeout', function(req, res){
  setTimeout(function() {
    res.send('<html><body>ok</body></html>');
  },req.param("timeout") || 0);
});

app.get('/status/:status', function(req, res){
  res.send("HTTP "+req.params.status,parseInt(req.params.status,10));
});

app.get('/empty', function(req, res){
  res.send("",204);
});

app.get('/close/end', function(req, res){
  res.socket.end();
  res.end();
});

app.get('/close/destroy', function(req, res){
  res.socket.destroy();
  res.end();
});

exports.app = app;