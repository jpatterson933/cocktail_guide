// require our http model
const http = require('http');

// Define a port to listen to incoming requests
const PORT = 8080;

// create a generic function to handle requests and responses
const handleRequest = (request, response) => {
    response.end(`It Works!! Path Hits:' ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listenting on http://localhost:${PORT}`)
})
