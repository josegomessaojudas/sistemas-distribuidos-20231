// este é o servidor 1
const http = require('http'); 

const server = http.createServer((req, res) => {
    res.statusCode = 200; 

    res.end(JSON.stringify({
        "codigo": 1, 
        "nome": "jose carmino",
        "endereco" : "rua sem nome sem numero"
    }));
} )

server.listen(3001, () => {
    console.log('o servidor 1 está ouvindo a porta 3001');
});

