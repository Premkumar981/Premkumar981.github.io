import http from 'http';

let server = http.createServer((req, res) => {
    res.end("Good morning...");
});

server.listen(8081, () => {
    console.log("Server started");
});