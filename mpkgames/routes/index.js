var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detalle', function(req,res){
  res.render('productDetail')
})

router.get('/carritoCompras', function(req,res){
  res.render('productCart')
})

router.get('/registroUsuarios', function(req,res){
  res.render('register')
})

router.get('/AgregarProductos', function(req,res){
  res.render('productAdd')
})



module.exports = router;
