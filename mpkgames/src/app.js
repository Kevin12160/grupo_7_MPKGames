var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const methodOverride = require('method-override');
const session = require('express-session');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var apiRouter = require('./routes/productosApi');
var apiUsersRouter = require('./routes/usersApi');

let productsRouter = require('./routes/productos') //requiero el módulo que se hará cargo de la administración de las rutas relacionadas con productos
let carritosRouter = require('./routes/carritos')
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(methodOverride('_method'));
 //app.use(session({secret:"mpkgames hasta la victoria"}));

app.use(session({ 		
  secret: 'mpkgames hasta la victoria"',
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter) //añado la ruta principal de productos de la cual derivarán todas las demás
app.use('/carritos', carritosRouter) //añado la ruta principal de productos de la cual derivarán todas las demás

app.use('/api', apiRouter);
app.use('/apiuser', apiUsersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
