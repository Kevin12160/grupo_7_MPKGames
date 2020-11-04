const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/productosController') //requiero el controlador que se hará cargo de la lógica
const controllerApi = require('../controllers/productosApiController')
const UsuAministradorMiddleware = require('../middleware/UsuAministradorMiddleware') 
let productoAltaValidator = require("../validator/productoAltaValidator")
const sessionUserCheck = require('../middleware/sessionUserCheck'); 

const multer = require('multer');
const path = require('path');
const { render } = require('ejs');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/products')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + Date.now() + path.extname(file.originalname))
    },    
})

// let upload = multer({storage:storage})
var upload = multer({
    storage:storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {            
             return callback(new Error('Solamente imagenes JPG, JPEG, PNG, GIF'))
        }
        callback(null, true)
    }
})


// router.get('/lista', controller.listar) //construyo la ruta que me visualizará información de prueba
router.get('/search',controller.search);
router.get('/detalle/:id',controller.detalle);
router.get('/listproductos', sessionUserCheck,controller.listarProdUsers) //construyo la ruta que me visualizará información de prueba esta es /productos


// SOLO si es administrador puede ver el form de agregar modificar y borrar
router.get('/',UsuAministradorMiddleware, controller.listar) //construyo la ruta que me visualizará información de prueba esta es /productos
router.get('/add/form',sessionUserCheck,UsuAministradorMiddleware,controller.AbreFormAgregar);
router.post('/add/form',upload.any(),sessionUserCheck,UsuAministradorMiddleware,productoAltaValidator,controller.publicar);
//   router.post('/add/form',upload.any(),controller.publicar);

//api
router.get('/api/all',sessionUserCheck,UsuAministradorMiddleware,controllerApi.all);
router.get('/api/totalesCarritoUser',sessionUserCheck,controllerApi.TotalesCarrito);

router.get('/show/:id/',sessionUserCheck,UsuAministradorMiddleware,controller.show);
router.put('/edit/:id',upload.any(),sessionUserCheck,UsuAministradorMiddleware,controller.actualizar);

router.delete('/delete/:id',sessionUserCheck,UsuAministradorMiddleware,controller.eliminar);



module.exports = router //exporto router