// ======> MODULOS <======= //

var express = require('express');
var router = express.Router();

// ======> CONTROLADORES <======= //
const controller = require("../controllers/usersController");
const controllerApi = require('../controllers/usersApiController')

// ======> VALIDACIONES <======= //
let registerValidator = require("../validator/registerValidator")
let loginValidator = require('../validator/loginValidator');
let perfilUserUpdateValidator = require('../validator/perfilUserUpdate');
// ======> MIDDLEWARES <======= //
const multerAvatar = require("../middleware/multerAvatar")
const sessionUserCheck = require('../middleware/sessionUserCheck'); 
const cookieCheck = require('../middleware/cookieCheck'); 
const UsuAministradorMiddleware = require('../middleware/UsuAministradorMiddleware') 


//-----------------
const multer = require('multer');
const path = require('path');
const { render } = require('ejs');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/Avatares')
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
//------------------
// ======> RUTAS <======= //
router.get("/registroUsuarios", controller.agregar);
router.post("/registroUsuarios", multerAvatar.any(), registerValidator, controller.registrarse);

router.get("/login", controller.MostraLogin);
router.post("/login",loginValidator, controller.processLogin);

//modificacion de usuario
router.get('/show/:id/',sessionUserCheck,controller.show);
router.put('/edit/:id',multerAvatar.any(),sessionUserCheck,controller.actualizar);
router.delete('/delete/:id',sessionUserCheck,controller.eliminar);


    // solo si se logeo puede cerrar Session
router.get('/logout',sessionUserCheck,controller.logout);

//api
router.get('/api/allUsers',sessionUserCheck,UsuAministradorMiddleware,controllerApi.allUsers);


// ======> FIN EXPORTAR RUTAS <======= //
module.exports = router; 
 