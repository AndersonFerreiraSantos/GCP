const handler = require('serve-handler');
const http = require('http');

const PORT = 3000;

const options = {
  public: "./",
  "symlinks": true,
  "etag": true
};



const server = http.createServer((request, response) => {
  try {
    return handler(request, response, options).catch((error) => {
      console.error('Error occurred:', error);
    }).then((response) => {
      console.log(`--> ${request.url}`);
    });
  } catch (error) {
    console.log('Error occurred:', error);
     if(error) return;
    response.writeHead(500);
    response.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log('Running on PORT:', PORT);
});