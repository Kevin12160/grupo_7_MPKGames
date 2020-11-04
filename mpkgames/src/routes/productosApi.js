const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controllerApi = require('../controllers/productosApiController') //requiero el controlador que se hará cargo de la lógica


router.get('/all', controllerApi.all) //construyo la ruta que me visualizará información de prueba esta es /productos
router.get('/totalesCarritoUser', controllerApi.TotalesCarrito)



module.exports = router //exporto router