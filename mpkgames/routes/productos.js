const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/productosController') //requiero el controlador que se hará cargo de la lógica

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


router.get('/', controller.listar) //construyo la ruta que me visualizará información de prueba
// router.get('/lista', controller.listar) //construyo la ruta que me visualizará información de prueba
router.get('/search',controller.search);
router.get('/detalle/:id',controller.detalle);

router.get('/carritoCompras/',controller.enCarrito);


router.get('/add/form',controller.AbreFormAgregar);
router.post('/add/form',upload.any(),controller.publicar);

router.get('/show/:id/',controller.show);
router.put('edit/:id',upload.any(),controller.actualizar);



module.exports = router //exporto router