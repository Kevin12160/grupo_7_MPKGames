const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/productosController') //requiero el controlador que se hará cargo de la lógica

const UsuAministradorMiddleware = require('../middleware/UsuAministradorMiddleware') 
const sessionUserCheck = require('../middleware/sessionUserCheck'); 

const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/products')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage:storage})


router.get('/',UsuAministradorMiddleware, controller.listar) //construyo la ruta que me visualizará información de prueba esta es /productos
// router.get('/lista', controller.listar) //construyo la ruta que me visualizará información de prueba
router.get('/search',controller.search);
router.get('/detalle/:id',controller.detalle);

router.get('/carritoCompras/',sessionUserCheck,controller.enCarrito);
router.put('/agregarAlCarrito/:id',upload.any(),sessionUserCheck,controller.AgregarAlCarritoDeCompras);
router.put('/retiraDelCarrito/:id',sessionUserCheck,controller.retiraDelCarrito);


// SOLO si es administrador puede ver el form de agregar modificar y borrar
router.get('/add/form',sessionUserCheck,UsuAministradorMiddleware,controller.AbreFormAgregar);
router.post('/add/form',upload.any(),sessionUserCheck,UsuAministradorMiddleware,controller.publicar);

router.get('/show/:id/',sessionUserCheck,UsuAministradorMiddleware,controller.show);
router.put('/edit/:id',upload.any(),sessionUserCheck,UsuAministradorMiddleware,controller.actualizar);


router.delete('/delete/:id',sessionUserCheck,UsuAministradorMiddleware,controller.eliminar);



module.exports = router //exporto router