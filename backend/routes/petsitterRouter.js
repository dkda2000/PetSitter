const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const usuariosController = require('../controllers/usuariosController');
const pedidosController = require('../controllers/pedidosController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene una lista con todos los productos de la bd.
 *     
 */

router.get('/productos', productosController.getAllProductos);

/**
 * @swagger
 * /api/productos/:id:
 *   get:
 *     summary: Obtiene un producto determinado por su id en la bd.
 *     
 */

router.get('/productos/:id', productosController.getProductoById);

/**
 * @swagger
 * /api/productos/:id:
 *   put:
 *     summary: Edita un producto determinado por su id en la bd. Necesita TOKEN para acceder.
 *     
 */

router.put('/productos/:id', authMiddleware, productosController.updateProducto);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crea un nuevo producto en la bd. Necesita TOKEN para acceder.
 *     
 */

router.post('/productos/', authMiddleware, productosController.createProducto);

/**
 * @swagger
 * /api/productos/:id:
 *   delete:
 *     summary: Elimina un producto determinado por su id en la bd. Necesita TOKEN para acceder.
 *      
 */

router.delete('/productos/:id', authMiddleware, productosController.deleteProducto);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene una lista con todos los usuarios de la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/usuarios', authMiddleware, usuariosController.getAllUsuarios);

/**
 * @swagger
 * /api/usuarios/:id:
 *   get:
 *     summary: Obtiene un usuario determinado por su id en la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/usuarios/:id', authMiddleware, usuariosController.getUsuarioById);

/**
 * @swagger
 * /api/usuarios/:id:
 *   put:
 *     summary: Edita un usuario determinado por su id en la bd. Necesita TOKEN para acceder.
 *     
 */

router.put('/usuarios/:id', authMiddleware, usuariosController.updateUsuario);

/**
 * @swagger
 * /usuarios/roles/:id_rol:
 *   get:
 *     summary: Obtiene una lista con todos los usuarios determinados por su rol en la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/usuarios/roles/:id_rol', authMiddleware, usuariosController.getUsuarioByRol);

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crea un nuevo usuario en la bd.
 *     
 */

router.post('/usuarios/', usuariosController.createUsuario);

/**
 * @swagger
 * api/usuarios/:id:
 *   delete:
 *     summary: Elimina un usuario determinado por su id en la bd. Necesita TOKEN para acceder.
 *     
 */

router.delete('/usuarios/:id', authMiddleware, usuariosController.deleteUsuario);

/**
 * @swagger
 * api/usuarios/:id:
 *   post:
 *     summary: Loguea un usuario con password. 
 *     
 */

router.post('/usuarios/login', usuariosController.login);

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Obtiene una lista con todos los pedidos + detalles de la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/pedidos', authMiddleware, pedidosController.getAllPedidos);

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Obtiene una lista con todos los roles de los usuarios de la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/roles', authMiddleware, usuariosController.getAllRoles);

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Obtiene una lista con todas los categorias de los productos de la bd. Necesita TOKEN para acceder.
 *     
 */

router.get('/categorias', productosController.getAllCategorias);


module.exports = router;