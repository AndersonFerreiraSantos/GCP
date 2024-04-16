const handler = require('serve-handler');
const http = require('http');

const PORT = 9000;

const options = {
  public: "/",
};

const server = http.createServer((request, response, ) => {
  return handler(request, response, options);
});

server.listen(PORT, () => {
  console.log('Running PORT:', PORT);
});
