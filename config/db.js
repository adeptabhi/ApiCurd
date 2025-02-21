import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MySql4455',
    database: 'apicurd',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 8000,
});

export default db;
