import mysql from "mysql2";

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    database: "receitas",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

export default pool;
