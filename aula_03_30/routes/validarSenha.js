import pool from "../pool.js";
import bcrypt from "bcryptjs";

function validar(caminho, email, senha) {
  console.log(caminho, email, senha);
  const sql = "SELECT * FROM login WHERE login.email=?";
  pool.query(sql, [email], (error, results, fields) => {
    if (results.length > 0) {
      if (
        email === results[0].email &&
        bcrypt.compareSync(senha, results[0].senha)
      ) {
        return true;
      } else {
        return false ;
      }
    }
  });
}

export default validar;
