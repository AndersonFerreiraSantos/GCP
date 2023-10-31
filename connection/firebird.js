// const config = require("../../../config");

// const query = "SELECT * FROM EMD101"
// runQueryInFirebird("SELECT * FROM EMD101", "localhost", 3051, "/firebird/data/db.FDB", "SYSDBA", "123").catch((error) => {
//   console.log(error)
// }).then((response) => {
//     console.log(response)
// });

const http = require('http');
const firebird = require('node-firebird');

// Configurações do banco de dados Firebird
const dbConfig = {
  host: 'localhost',
  port: 3051, // Porta padrão do Firebird
  database: "/firebird/data/db.FDB",
  user: 'SYSDBA',
  password: '123',
};

// Crie um servidor HTTP simples
const server = http.createServer((req, res) => {
  // Estabeleça uma conexão com o banco de dados

});

firebird.attach(dbConfig, (err, db) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro ao conectar ao banco de dados.');
      return;
    }

    // Execute uma consulta SQL
    db.query('SELECT * FROM EMD101', (err, result) => {
        console.log(result)
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao executar a consulta.');
        return;
      }

      // Envie a resposta como JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result, null, 2));

      // Encerre a conexão com o banco de dados
      db.detach();
    });
  });

// Defina a porta em que o servidor irá ouvir
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor Node.js está ouvindo na porta ${port}`);
});
