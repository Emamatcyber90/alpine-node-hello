require('http').createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(9999);