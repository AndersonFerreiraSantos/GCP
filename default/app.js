const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1> Barbaridade </h1></body></html>');
});

const port = 9090;
server.listen(port, () => {
  console.log(`Run port: ${port}`);
});
