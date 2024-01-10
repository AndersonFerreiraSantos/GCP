const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 8000;

const downloadsPath = path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads');

const requestListener = function (req, res) {
    console.log('request received');

    // Rota para listar arquivos
    if (req.url === '/list') {
        fs.readdir(downloadsPath, (err, files) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error listing files');
            }

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(files));
        });
    }
    else if (req.url.startsWith('/downloads/')) {
        const filename = req.url.split('/').pop();
        const filePath = path.join(downloadsPath, filename);

        fs.exists(filePath, (exists) => {
            if (exists) {
                const fileStream = fs.createReadStream(filePath);
                res.setHeader('Content-disposition', `attachment; filename=${filename}`);
                res.writeHead(200);
                fileStream.pipe(res);
            } else {
                res.writeHead(404);
                res.end('File not found');
            }
        });
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end('<h1>This is Ngrok</h1>');
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

//npx serve -p 8000

//http://localhost:8000

//npx tunnelmole --port 8000