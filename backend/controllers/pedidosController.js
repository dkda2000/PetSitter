/*const db = require('../db/db');

 const getAllProductos = (req, res) => {
    const sql = 'SELECT * FROM productos';
     db.query(sql, (err, results) => {
         if (err) throw err;
            res.json(results);
        });
 };


 const getProductoById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM productos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
            res.json(result);
        });
};

const updateProducto = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?';
    db.query(sql, [nombre, descripcion, precio, id], (err, result) => {
        if (err) throw err;
            res.json({message: 'Producto actualizado'});
        });
};

const createProducto = (req, res) => {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const sql = 'INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, descripcion, precio, stock, categoria_id], (err, result) => {
        if (err) throw err;
            res.json({message: 'Producto creado', producto_id: result.insertId});
        });
};

 module.exports = {
    getAllProductos,
    getProductoById,
    updateProducto,
    createProducto
}
*/