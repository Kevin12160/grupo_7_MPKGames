const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

const controller = require('../controllers/carritoController') //requiero el controlador que se hará cargo de la lógica

const sessionUserCheck = require('../middleware/sessionUserCheck'); 

const path = require('path');


router.get('/enCarritoCompras/',sessionUserCheck,controller.enCarrito);
router.post('/agregarAlCarrito/:id',sessionUserCheck,controller.agregarAlCarrito);
router.delete('/eliminarDelCarrito/:id',sessionUserCheck,controller.eliminarDelCarrito);



module.exports = router //exporto router