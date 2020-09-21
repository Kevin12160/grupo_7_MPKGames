var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index',
//    { title: 'Home' },)
// });
const controller = require('../controllers/mainController'); //requiero el controlador para que se haga cargo de la lógica
const cookieCheck = require('../middleware/cookieCheck'); 

/* GET home page. */
router.get('/', cookieCheck,controller.index);


/* router.get('/detalle', function(req,res){
  res.render('productDetail', 
  { title: 'Detalle' });
}); */


router.get('/registroUsuarios', function(req,res){
  res.render('register',
  { title: 'Registro de usuarios' });
});


// router.get('/carritoCompras', function(req,res){
//   res.render('productCart', 
//   { title: 'Carrito de Compras' });
// });

router.get('/botones', function(req,res){
  res.render('btnOpcModCar',
   { title: 'botonesAgreMod' });
});

router.get('/botonAgregar', function(req,res){
  res.render('productAdd',
   { title: 'Agregar Producto' });
});

router.get('/ModificarJuego', function(req,res){
  res.render('modificarJuego',
   { title: 'Modificar Juego' });
});

router.get('/login', function(req,res){
  res.render('logine',
   { title: 'Login' });
});

module.exports = router;
