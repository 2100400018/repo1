var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    if (err) {
      console.error(err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);
