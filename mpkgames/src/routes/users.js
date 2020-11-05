// ======> MODULOS <======= //

var express = require('express');
var router = express.Router();

// ======> CONTROLADORES <======= //
const controller = require("../controllers/usersController");


// ======> VALIDACIONES <======= //
let registerValidator = require("../validator/registerValidator")
let loginValidator = require('../validator/loginValidator');

// ======> MIDDLEWARES <======= //
const multerAvatar = require("../middleware/multerAvatar")
const sessionUserCheck = require('../middleware/sessionUserCheck'); 
const cookieCheck = require('../middleware/cookieCheck'); 


// ======> RUTAS <======= //
router.get("/registroUsuarios", controller.agregar);
router.post("/registroUsuarios", multerAvatar.any(), registerValidator, controller.registrarse);




router.get("/login", controller.MostraLogin);
router.post("/login",loginValidator, controller.processLogin);


    // solo si se logeo puede cerrar Session
router.get('/logout',sessionUserCheck,controller.logout);

// ======> FIN EXPORTAR RUTAS <======= //
module.exports = router; 
 