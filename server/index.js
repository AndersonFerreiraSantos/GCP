const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

const diretorioDosArquivos = '/'; // Substitua pelo caminho do seu diretório

app.use(express.static(path.join(diretorioDosArquivos)));

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});