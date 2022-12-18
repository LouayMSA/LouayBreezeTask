var http = require('http');
var fs = require('fs');
var datemodule = require ('./datemodule');
http.createServer(function (req, res) {
fs.readFile('helloworld.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data +datemodule.myDateTime());
    return res.end();
  });
}).listen(8080);
