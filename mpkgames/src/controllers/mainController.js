const db = require('../database/models');

module.exports = { //exporto un objeto literal con todos los metodos
    
    index: function(req, res) {
        db.Producto.findAll()
            .then(function(resultados){                                
                let OfertasUtimosJuegos = resultados.filter(producto => {
                    return producto.OfertasUtimosJuegos == "Si"
                })
                let OfertasDeLaSemana = resultados.filter(producto => {
                    return producto.OfertasDeLaSemana == "Si"
                })

                res.render('index', {
                    title: "Home",
                    OfertasUtimosJuegos: OfertasUtimosJuegos,
                    OfertasDeLaSemana: OfertasDeLaSemana, 
                    user: req.session.user,             
                })
            })
    },
    


}