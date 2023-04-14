import express from 'express';
import pool from '../pool.js';

const routes = express.Router();

routes.get("/tipocomida", (req, res, error) => {
    const sql = 'SELECT * FROM tipocomida';
    pool.query(sql, (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    });
});

routes.get("/tipocomida/:id", (req, res, error) => {
    const sql = 'SELECT * FROM tipocomida WHERE tipocomidaid_tipocomida=?';
    const id_tipocomida = params.id;
    pool.query(sql, [id_tipocomida], (error, results, fields ) => {
        if(!error){
            if(results.length <= 0 ){
                res.status(404).json({msg: "registro não encontrado"})
            } else {
                res.status(200).json(results);
            }
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    })
});

routes.get("/tipocomida/nome/:nome", (req, res, error) => {
    const sql = 'SELECT * FROM receita WHERE tipocomida.nome=?';
    const nome = params.nome;
    pool.query(sql, [nome], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    })
})

routes.post("/tipocomida", (req, res, error) => {
    const sql = 'INSERT INTO tipocomida( nome ) VALUES (?)';
    const {nome, id_tipocomida} = req.body; 
    pool.query(sql, [nome, id_tipocomida], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: "login cadastrado"});
        }
    })
});

routes.put("/tipocomida/id/:id", (req, res, error) => {
    const sql = 'UPDATE tipocomida SET nome=? WHERE id_tipocomida=?'
    const id_tipocomida = req.params.id; 
    const {nome} = req.body;
    pool.query(sql, [nome, id_tipocomida], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    })
   
} );

routes.delete("/tipocomida/:id", (req, res, error) => {
    const sql = 'DELETE FROM tipocomida WHERE id_tipocomida=?'
    const id_tipocomida = req.params.id; 
    pool.query(sql, [id_tipocomida], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    });
});

export default routes;
