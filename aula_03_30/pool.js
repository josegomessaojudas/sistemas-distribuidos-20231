import mysql from "mysql2";

const pool = mysql.createPool({
    host: "192.168.0.161",
    user: "root",
    database: "receitas",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

export default pool;
