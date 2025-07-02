import http from 'http';

let server = http.createServer((req, res) => {
    res.end("This is server 3...");
});

server.listen(8082, () => {
    console.log("Server started");
});