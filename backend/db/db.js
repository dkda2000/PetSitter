const mysql = require('mysql2');

console.info('Iniciando db.js');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'mysql-proyectosestudiantes.alwaysdata.net', // Cambia a tu host de MySQL
    user: '366458', // Cambia al usuario de tu base de datos
    password: 'Root123@', // Cambia a la contraseña de tu base de datos
    database: 'proyectosestudiantes_bd', // Cambia al nombre de tu base de datos,
    connectTimeout:1000000,
    port:3306

});

console.info('Iniciando conex a la base de datos MySQL');

// Conectar a la base de datos
connection.connect((err) => {   

    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
