var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   { title: 'Home' },)
});

router.get('/detalle', function(req,res){
  res.render('productDetail', 
  { title: 'Detalle' });
});

router.get('/registroUsuarios', function(req,res){
  res.render('register',
  { title: 'Registro de usuarios' });
});


router.get('/carritoCompras', function(req,res){
  res.render('productCart', 
  { title: 'Carrito de Compras' });
});

router.get('/AgregarProductos', function(req,res){
  res.render('productAdd',
   { title: 'Agregar Productos' });
});



module.exports = router;
