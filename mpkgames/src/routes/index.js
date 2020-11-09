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


module.exports = router;
