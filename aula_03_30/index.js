import express from 'express';

// modulos do programa que vamos construir
import pool from './pool.js';
import routeLogin from './routes/login.js';
import routeTipoComida from './routes/tipocomida.js'
import routeReceita from './routes/receita.js'

const app = express();
app.use(express.json());
app.use(routeLogin);
app.use(routeTipoComida);
app.use(routeReceita);

const port = 3000;

app.listen(port, () => {
    console.log("Servidor ativo na porta", port);
});
