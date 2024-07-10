const config = require('../config/config');


const db = require('../db/db');

 const getAllPedidos = (req, res) => {
    const sql = "SELECT p.id, p.fecha, p.total, u.nombre, u.direccion, e.descripcion AS 'estado' FROM proyectosestudiantes_bd.pedidos p INNER JOIN usuarios u ON p.cliente_id = u.id INNER JOIN estados e ON p.estado_id = e.id";
     db.query(sql, (err, results) => {
         if (err) throw err;
            res.json(results);
        });
 };

 module.exports = {
    getAllPedidos
}
