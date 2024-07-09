const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const config = require('../config/config');


const db = require('../db/db');

 const getAllUsuarios = (req, res) => {
    const sql = 'SELECT * FROM usuarios';
     db.query(sql, (err, results) => {
         if (err) throw err;
            res.json(results);
        });
 };


 const getUsuarioById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
            res.json(result);
        });
};

const getUsuarioByRol = (req, res) => {
    const { id_rol } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE rol_id = ?';
    db.query(sql, [id_rol], (err, result) => {
        if (err) throw err;
            res.json(result);
        });
};

const login = (req, res) => {
    const { email, pass } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ? AND pass = ?';
    db.query(sql, [email, pass], (err, result) => {
        console.log(result);
        if (result.length!=0) {
            const token = jwt.sign({ id: result.id}, config.secretKey, {expiresIn: config.tokenExpiresIn})
            res.status(200).send({ auth:true, token});
        }

        else {res.status(404).send("No se encontró el usuario")}
        
                    // res.json(result);
        });

    
};

 const updateUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, email, direccion, telefono, pass, rol_id } = req.body;
    const sql = 'UPDATE usuarios SET nombre = ?, email = ?, direccion = ?, telefono = ?, pass = ?, rol_id = ? WHERE id = ?';
    db.query(sql, [nombre, email, direccion, telefono, pass, rol_id], (err, result) => {
        if (err) throw err;
            res.json({message: 'Usuario actualizado'});
        });
};

const createUsuario = (req, res) => {
    const { nombre, email, direccion, telefono, pass, rol_id } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, email, direccion, telefono, pass, rol_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, email, direccion, telefono, pass, rol_id], (err, result) => {
        if (err) throw err;
            res.json({message: 'Usuario creado', usuario_id: result.insertId});
        });
};

const deleteUsuario = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {res.json({message: err})};
            res.json({message: 'Usuario eliminado'});
        });
};

 module.exports = {
    getAllUsuarios,
    getUsuarioById,
    getUsuarioByRol,
    updateUsuario,
    createUsuario,
    deleteUsuario,
    login
}

