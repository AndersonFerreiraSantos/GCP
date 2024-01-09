
const http = require('http');
const firebird = require('node-firebird');

const dbConfig = {
  host: 'localhost',
  port: 3051,
  database: "/firebird/data/db.FDB",
  user: 'SYSDBA',
  password: 'andersonTestHueHue',
};

const server = http.createServer((req, res) => {

});

firebird.attach(dbConfig, (err, db) => {
    if (err) {
      console.error('Connection Error', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Connection error.');
      return;
    }

    db.query('SELECT * FROM Test', (err, result) => {
        console.log(result)
      if (err) {
        console.error('Error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error query.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result, null, 2));

      db.detach();
    });
  });

const port = 5050;
server.listen(port, () => {
  console.log(`Server: ${port}`);
});
