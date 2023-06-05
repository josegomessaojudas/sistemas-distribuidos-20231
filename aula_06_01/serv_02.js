// este é o servidor 2 
const http = require('http'); 

const server = http.createServer((recebido, enviado) => {
    enviado.statusCode = 200; 
    enviado.end('eu sou o servidor 2');
});

server.listen(3002, () => {
    console.log('o servidor esta ouvindo a porta 3002'); 
});

