var express = require('express');
var router = express.Router();

const controller = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');


router.get("/registroUsuarios", controller.agregar)
router.post("/registroUsuarios", controller.registrarse)

router.get("/login", controller.agrege)
router.post("/login", controller.login)




module.exports = router;
