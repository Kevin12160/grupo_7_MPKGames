const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controllerApiUsers = require('../controllers/usersApiController') //requiero el controlador que se hará cargo de la lógica

const UsuAministradorMiddleware = require('../middleware/UsuAministradorMiddleware') 
const sessionUserCheck = require('../middleware/sessionUserCheck'); 



router.get('/allUsers', controllerApiUsers.allUsers) //construyo la ruta que me visualizará información de prueba esta es /productos




module.exports = router //exporto router