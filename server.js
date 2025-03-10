import * as http from 'node:http';
const hello = "Hello, Galvanize!\n";
const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (request.method === 'GET') {response.end(hello.repeat(10));}
    response.statusCode = 404;
    response.end();});
server.listen(3000, "localhost", () => {console.log(`Server running at http://localhost:3000/`);});