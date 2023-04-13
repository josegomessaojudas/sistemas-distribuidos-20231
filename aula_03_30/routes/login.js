import express from 'express';
import pool from '../pool.js';

const routes = express.Router();

routes.get("/login", (req, res, error) => {
    const sql = 'SELECT * FROM login';
    pool.query(sql, (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    });
});

routes.get("/login/:id", (req, res, error) => {
    const sql = 'SELECT * FROM login WHERE login.id_login=' + req.params.id;
    pool.query(sql, (error, results, fields ) => {
        if(!error){
            if(results.length <= 0 ){
                res.status(404).json({msg: "registro n~ao encontrado"})
            } else {
                res.status(200).json(results);
            }
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    })
});

routes.get("/login/email/:email", (req, res, error) => {
    const sql = 'SELECT * FROM login WHERE login.email=?';
    console.log("antes", sql); 
    pool.query(sql, [email], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "sem dados"});
        }
    })
})

routes.post("/login", (req, res, error) => {
    const sql = 'INSERT INTO login( email, senha, nome, tipoUsuario ) ' +
                'VALUES           (     ?,     ?,    ?,           ? )' 
    const {email, senha, nome, tipoUsuario} = req.body; 
    /*
    const email = req.body.email; 
    const senha = req.body.senha;
    const nome = req.body.nome; 
    const tipoUsuario = req.body.tipoUsuario;
    */
    pool.query(sql, [email, senha, nome, tipoUsuario], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: "login cadastrado"});
        }
    })
});

routes.put("/login", (req, res, error) => {
    const sql = 'UPDATE login SET email=?, senha=?, nome=?, tipoUsuario=?  WHERE id_login=?'
    const {email, senha, nome, tipoUsuario, id_login} = req.body;
    pool.query(sql, [email, senha, nome, tipoUsuario, id_login], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    })
} )

routes.put("/login/id/:id", (req, res, error) => {
    const sql = 'UPDATE login SET email=?, senha=?, nome=?, tipoUsuario=?  WHERE id_login=?'
    const {email, senha, nome, tipoUsuario} = req.body;
    const id_login = req.params.id; 
    pool.query(sql, [email, senha, nome, tipoUsuario, id_login], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    })
} );

routes.delete("/login/:id", (req, res, error) => {
    const sql = 'DELETE FROM login WHERE id_login=?'
    const id_login = req.params.id; 
    pool.query(sql, [id_login], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            console.log(error)
            res.status(404).json({msg: error});
        }
    });
});

export default routes;
