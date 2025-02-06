var http = require('http');
http.createServer(function(req,res){
  res.write('Hello world, This is Stedy.')
  res.end()
}).listen(8080)