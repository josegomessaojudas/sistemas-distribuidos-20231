import express from 'express';
import pool from '../pool.js';

const routes = express.Router();

routes.get("/receita", (req, res, error) => {
    const sql = 'SELECT * FROM receita';
    pool.query(sql, (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    });
});

routes.get("/receita/:id", (req, res, error) => {
    const sql = 'SELECT * FROM receita WHERE receita.id_receita=?';
    const id_receita = params.id;
    pool.query(sql, [id_receita], (error, results, fields ) => {
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

routes.get("/receita/nome/:nome", (req, res, error) => {
    const sql = 'SELECT * FROM receita WHERE receita.nome=?';
    const nome = params.nome;
    pool.query(sql, [nome], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    })
})

routes.post("/receita", (req, res, error) => {
    const sql = 'INSERT INTO receita( nome, ingredientes, id_tipocomida ) VALUES (?, ?, ?)';
    const {nome, ingredientes, id_tipocomida} = req.body; 
    pool.query(sql, [nome, ingredientes, id_tipocomida], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: "login cadastrado"});
        }
    })
});

routes.put("/receita/id/:id", (req, res, error) => {
    const sql = 'UPDATE receita SET nome=?, ingredientes=?, id_tipocomida=? WHERE id_receita=?'
    const id_receita = req.params.id; 
    const {nome, ingredientes, id_tipocomida} = req.body;
    pool.query(sql, [nome, ingredientes, id_tipocomida, id_receita], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    })
   
} );

routes.delete("/receita/:id", (req, res, error) => {
    const sql = 'DELETE FROM receita WHERE id_receita=?'
    const id_receita = req.params.id; 
    pool.query(sql, [id_receita], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    });
});

export default routes;
