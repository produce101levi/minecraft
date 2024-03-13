const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sitio_preguntas',
    password: '*tE5wesp7thu',
});
module.exports = pool.promise();