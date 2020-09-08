const dbProduct = require('../data/database') //requiero la base de datos de productos

module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {
        let OfertasUtimosJuegos = dbProduct.filter(producto => {
            return producto.OfertasUtimosJuegos == "Si"
        })
        let OfertasDeLaSemana = dbProduct.filter(producto => {
            return producto.OfertasDeLaSemana == "Si"
        })
        
        res.render('index', { //renderizo en el navegador la vista index que contiene el HOME del sitio
            title: 'Home', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
            OfertasUtimosJuegos: OfertasUtimosJuegos,
            OfertasDeLaSemana: OfertasDeLaSemana
        })
    }
 
}