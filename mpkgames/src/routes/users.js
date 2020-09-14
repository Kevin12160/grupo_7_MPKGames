var express = require('express');
var router = express.Router();

const controller = require("../controllers/usersController");


let registerValidator = require("../validator/registerValidator")


const multerAvatar = require("../middleware/multerAvatar")

router.get("/registroUsuarios", controller.agregar)
router.post("/registroUsuarios", multerAvatar.any(), registerValidator, controller.registrarse)

router.get("/login", controller.agrege)
router.post("/login", controller.login)




module.exports = router; 
 