const mysql = require('mysql2');

console.info('Iniciando db.js');

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'mysql-proyectosestudiantes.alwaysdata.net', // host de MySQL
    user: '366458', // usuario de la base de datos
    password: 'Root123@', // contraseña de la base de datos
    database: 'proyectosestudiantes_bd', // nombre de la base de datos,
    connectTimeout:1000000,
    port:3306

});

console.info('Iniciando conex a la base de datos MySQL');

// Conecta a la base de datos
connection.connect((err) => {   

    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
