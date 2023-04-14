import express from "express";
import pool from "../pool.js";
import bcrypt from "bcryptjs";
import verificaJWT from "../validador.js";


const routes = express.Router();

routes.get("/login", verificaJWT, (req, res, error) => {
  const sql = "SELECT * FROM login";
  pool.query(sql, (error, results, fields) => {
    MensagensLogin(error, results, res);
  });
});

routes.get("/login/:id", verificaJWT, (req, res, error) => {
  const sql = "SELECT * FROM login WHERE login.id_login=" + req.params.id;
  pool.query(sql, (error, results, fields) => {
    MensagensLogin(error, results, res);
  });
});

routes.get("/login/email/:email", (req, res, error) => {
  const sql = "SELECT * FROM login WHERE login.email=?";
  pool.query(sql, [email], (error, results, fields) => {
    MensagensLogin(error, results, res);
  });
});

routes.get("/autenticar", (req, res, error) => {
  const email = req.headers["email"]
  const senha = req.headers["senha"]
  const sql = "SELECT * FROM login WHERE login.email=?";;
  pool.query(sql, [email], (error, results, fields) => {
    if(results.length > 0){
      console.log(results[0].email, results[0].senha)
      if( email === results[0].email && bcrypt.compareSync(senha, results[0].senha)){
        res.status(200).end();
      } else {
        res.send(401).end();
      }
    }
  });
})

routes.post("/login", (req, res, error) => {
  const sql = "INSERT INTO login( email, senha, nome, tipoUsuario ) VALUES(?,?,?,?)";
  const { email, nome, tipoUsuario } = req.body;
  const senha =  bcrypt.hashSync(req.body.senha); 
  pool.query(
    sql,
    [email, senha, nome, tipoUsuario],
    (error, results, fields) => {
      MensagensLogin(error, results, res);
    }
  );
});

routes.put("/login", (req, res, error) => {
  const sql = "UPDATE login SET email=?, senha=?, nome=?, tipoUsuario=?  WHERE id_login=?";
  const { email, senha, nome, tipoUsuario, id_login } = req.body;
  pool.query(
    sql,
    [email, senha, nome, tipoUsuario, id_login],
    (error, results, fields) => {
      MensagensLogin(error, results, res);
    }
  );
});

routes.put("/login/id/:id", (req, res, error) => {
  const sql = "UPDATE login SET email=?, senha=?, nome=?, tipoUsuario=?  WHERE id_login=?";
  const { email, senha, nome, tipoUsuario } = req.body;
  const id_login = req.params.id;
  pool.query(
    sql,
    [email, senha, nome, tipoUsuario, id_login],
    (error, results, fields) => {
      MensagensLogin(error, results, res);
    }
  );
});

routes.delete("/login/:id", (req, res, error) => {
  const sql = "DELETE FROM login WHERE id_login=?";
  const id_login = req.params.id;
  pool.query(sql, [id_login], (error, results, fields) => {
    MensagensLogin(error, results, res);
  });
});

function MensagensLogin(error, results, res) {
  //if (results.length > 0) {
    if (!error) {
      res.status(200).json(results);
    } else {
      console.log(error);
      res.status(404).json({ msg: error });
    }
  //} else {
  //  res.status(404).json({ msg: "sem dados" });
  //}
}

export default routes;
