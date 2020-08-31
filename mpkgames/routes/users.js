var express = require('express');
var router = express.Router();

const controller = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/registroUsuarios", controller.agregar)
router.post("/registroUsuarios", controller.registrarse)

router.post("/login", controller.login)




module.exports = router;
