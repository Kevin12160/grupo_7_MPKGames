const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/productosController') //requiero el controlador que se hará cargo de la lógica
const controllerApi = require('../controllers/productosApiController')
const UsuAministradorMiddleware = require('../middleware/UsuAministradorMiddleware') 
const productoAltaValidator = require("../validator/productoAltaValidator")
const sessionUserCheck = require('../middleware/sessionUserCheck'); 

const detailProductValidator=require("../validator/detailProductValidator");
const upload=require("../middleware/upImageProduct");

const { render } = require('ejs');

// router.get('/lista', controller.listar) //construyo la ruta que me visualizará información de prueba
router.get('/search',controller.search);
router.get('/detalle/:id',controller.detalle);
router.get('/listproductos', sessionUserCheck,controller.listarProdUsers) //construyo la ruta que me visualizará información de prueba esta es /productos


// SOLO si es administrador puede ver el form de agregar modificar y borrar
router.get('/',UsuAministradorMiddleware, controller.listar) //construyo la ruta que me visualizará información de prueba esta es /productos
router.get('/add/form',sessionUserCheck,UsuAministradorMiddleware,controller.AbreFormAgregar);
router.post('/add/form',upload,sessionUserCheck,UsuAministradorMiddleware,productoAltaValidator,controller.publicar);
//   router.post('/add/form',upload.any(),controller.publicar);

//api
router.get('/api/all',sessionUserCheck,UsuAministradorMiddleware,controllerApi.all);
router.get('/api/totalesCarritoUser',sessionUserCheck,controllerApi.TotalesCarrito);

router.get('/show/:id/',sessionUserCheck,UsuAministradorMiddleware,controller.show);
router.put('/edit/:id',upload,detailProductValidator,sessionUserCheck,UsuAministradorMiddleware,controller.actualizar);

router.delete('/delete/:id',sessionUserCheck,UsuAministradorMiddleware,controller.eliminar);



module.exports = router //exporto router