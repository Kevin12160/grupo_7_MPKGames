const express = require('express'); //requiero express
const router = express.Router(); //requiero el método Router

/*Middleware para trabajar con imagen */
const upNewsImages=require("../middleware/upNewsImages");

/*require contrlller Noticias */
const controllerNoticia = require('../controllers/controllerNoticia')

/*Rutas de Noticias */
router.get("/noticiasMenuShow",controllerNoticia.mostrarNoticias)
router.get('/add/fromNoticias',controllerNoticia.mostrarFormNoticias);
router.post('/add/fromNoticias',upNewsImages,controllerNoticia.agregarNoticia) //construyo la ruta que me visualizará información de prueba esta es /productos

router.get("/noticiasShow/:id",controllerNoticia.mostrarNoticiaPorId)

module.exports = router;