// este é o servidor central 
const http = require('http');
const url = require('url');

const servers = [
    {id: 1, url:'http://localhost:3001'}, 
    {id: 2, url:'http://localhost:3002'}, 
    {id: 3, url:'http://localhost:3003'} 
]

const server = http.createServer((req, res) => {
    const parserUrl = url.parse(req.url, true);
    const serverId = parserUrl.query.serverId; 

    if(!serverId) {
        res.statusCode = 400;
        res.end('serverId precisa de um parametro'); 
        return; 
    }

    const targetServer = servers.find( server => server.id == serverId); 

    if(!targetServer){
        res.statusCode = 404; 
        res.end('este servidor não existe'); 
        return; 
    }

    // está na hora de enviar uma mensagem para um servidor 
    const proxyReq = http.request( targetServer.url, proxyRes => {
        res.statusCode = proxyRes.statusCode; 
        proxyRes.pipe(res); 
    }); 

    req.pipe(proxyReq);

})

server.listen(3000, () => {
    console.log('este é o servidor central, que esta ouvindo a porta 3000')
});