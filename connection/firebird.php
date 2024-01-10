<?php

// Configurações de conexão ao banco de dados Firebird

// const dbConfig = {
//     host: 'localhost',
//     port: 3051, // Porta padrão do Firebird
//     database: "/firebird/data/db.FDB",
//     user: 'SYSDBA',
//     password: '123',
//   };

$host = 'localhost:3051';
$database = "/firebird/data/db.FDB",
$username = 'SYSDBA';
$password = '123';
$port = 3051;

echo $connection = ibase_connect($host . ':' . $database, $username, $password, $port);

if (!$connection) {
    die('Erro ao conectar ao banco de dados: ' . ibase_errmsg());
}

$sql = "SELECT * FROM sua_tabela";
$result = ibase_query($connection, $sql);

if (!$result) {
    die('Erro ao executar a consulta: ' . ibase_errmsg());
}

echo '<h1>Resultados da Consulta</h1>';
echo '<table border="1">';
echo '<tr><th>ID</th><th>Nome</th></tr>';

while ($row = ibase_fetch_assoc($result)) {
    echo '<tr>';
    echo '<td>' . $row['ID'] . '</td>';
    echo '<td>' . $row['NOME'] . '</td>';
    echo '</tr>';
}

echo '</table>';

ibase_close($connection);
?>