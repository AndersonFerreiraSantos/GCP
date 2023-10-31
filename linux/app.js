const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Mas Oh</h1></body></html>');
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
