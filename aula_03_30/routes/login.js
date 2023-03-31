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

export default routes;
