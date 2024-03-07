const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'minecraft',
    password: '*tE5wesp7thu',
    port: 3306,
});

module.exports = pool.promise();