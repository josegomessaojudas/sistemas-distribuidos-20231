// este é o servidor 3 
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.end('Eu sou o servidor 3'); 
});

server.listen(3003, () => {
    console.log('o servidor 3 escuta a porta 3003');
})