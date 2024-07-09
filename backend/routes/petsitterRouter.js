const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const usuariosController = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/productos', productosController.getAllProductos);
router.get('/productos/:id', productosController.getProductoById);
router.put('/productos/:id', authMiddleware, productosController.updateProducto);
router.post('/productos/', authMiddleware, productosController.createProducto);
router.delete('/productos/:id', authMiddleware, productosController.deleteProducto);
router.post('/guardar', authMiddleware, productosController.guardarArchivo); 

router.get('/usuarios', authMiddleware, usuariosController.getAllUsuarios);
router.get('/usuarios/:id', authMiddleware, usuariosController.getUsuarioById);
router.put('/usuarios/:id', authMiddleware, usuariosController.updateUsuario);
router.get('/usuarios/roles/:id_rol', authMiddleware, usuariosController.getUsuarioByRol);
router.post('/usuarios/', usuariosController.createUsuario);
router.delete('/usuarios/:id', authMiddleware, usuariosController.deleteUsuario);
router.post('/usuarios/login', usuariosController.login);


module.exports = router;