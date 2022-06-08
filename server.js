// require our http model
const http = require('http');
const fs = require('fs');

// Define a port to listen to incoming requests
const PORT = 8080;

// create a generic function to handle requests and responses
const handleRequest = (request, response) => {
    // response.end(`It Works!! Path Hits:' ${request.url}`);

    fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
        if (err) throw err;

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listenting on http://localhost:${PORT}`)
})
