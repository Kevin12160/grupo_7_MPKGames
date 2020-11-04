// const dbProduct = require('../data/database'); //requiero la base de datos de productos


const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

module.exports = { //exporto un objeto literal con todos los metodos
    //OK realizado
    listar: function(req, res) {
        let  totalDeProductos = 0;
        db.Producto.count().then(resultado => {
             totalDeProductos = (resultado)
            })

        // db.Producto.findAll({attributes: ['IdJuego', 'Codigo', 'NombreDeProducto', 'Precio', 'Idioma', 'Descuento`', 'Imagen']})
        db.Producto.findAll()
            .then(function(ListaDeproductos){                
                res.render('productosLista', {
                    title: "Todos los Productos",
                    productos: ListaDeproductos,
                    totalDeProductos: totalDeProductos,   
                    user: req.session.user,  
                               
                })
            })
    },
    listarProdUsers:function(req,res){
        let  totalDeProductos = 0;
        db.Producto.count().then(resultado => {
             totalDeProductos = (resultado)
            })

        // db.Producto.findAll({attributes: ['IdJuego', 'Codigo', 'NombreDeProducto', 'Precio', 'Idioma', 'Descuento`', 'Imagen']})
        db.Producto.findAll()
            .then(function(ListaDeproductos){                
                res.render('productosListaUsers', {
                    title: "Listado de Productos",
                    productos: ListaDeproductos,
                    totalDeProductos: totalDeProductos,   
                    user: req.session.user,                                 
                })
            })
    },

    search:function(req,res){            
        let  totalDeProductos = 0;

        db.Producto.count().then(resultado => {
             totalDeProductos = (resultado)
            })

        db.Producto.findAll({
            where: {
                NombreDeProducto: { [Op.substring] : req.query.search}
            }
            })
            .then(function(ListaDeproductosFiltro){                
                res.render('productosListaUsers', {
                    title: "Resultado de la busqueda",
                    productos: ListaDeproductosFiltro,
                    totalDeProductos: totalDeProductos,   
                    user: req.session.user,             
                })
            })
    },


    detalle:function(req,res){
        let id = req.params.id;
        // let CategoriaDelJuego = "";

        db.Producto.findByPk(id)
            .then(function(DetalleProducto){                               
                        res.render('productDetail',{
                            title:"Detalle del Producto",
                            producto: DetalleProducto,
                            productoSegunCategoria: DetalleProducto,                            
                            user: req.session.user,   
                        })
            })       
    },



    AbreFormAgregar:function(req,res){        
        res.render('productAdd',{
            title:"Agregar Producto",
            user: req.session.user,  
        })
    },    
 
//OK realizado
    publicar:function(req,res,next){
               
        let errors = validationResult(req);
        
        if(errors.isEmpty()){

        db.Producto.create({            
            Codigo: req.body.codigo,                    
            NombreDeProducto: req.body.nombreDelProducto,
            Precio:Number(req.body.precioProd),
            Tamanio: req.body.tamanioJue,
            Idioma: req.body.idiomaJuego,                    
            IdiomaSubt: req.body.subtitulo,     
            Categoria: req.body.categoriaJuego,                                    
            FechaLanzamiento: req.body.fechaLanzam,
            Descuento:  Number(req.body.descuento),
            Stock: Number(req.body.stock),    
            DescripcionCorta: req.body.detalle,
            Calificacion: "",
            OfertasUtimosJuegos: "",
            OfertasDeLaSemana: "",            
            Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        })
        .then(result => {
            // console.log(result)
            res.redirect('/productos')
        })
        .catch(err => {
            res.send(err)
        })
        }else{     
            res.render("productAdd",{
                title:"con errores",                
                errors:errors.mapped(), 
                old:req.body,                               
                user:req.session.user
            })
        }        
    },

    show:function(req,res){
        let idProducto = req.params.id;       
        
        db.Producto.findByPk(idProducto)
            .then(function(DetalleProducto){   
                // res.send(DetalleProducto)                            
                        res.render('productShow',{
                            title:"Ver/Editar Producto",
                            producto: DetalleProducto,                                                      
                            user: req.session.user,   
                        })
            })  
        
    },

    actualizar:function(req,res){
        let idproducto = req.params.id;
        let errors=validationResult(req);

        console.log("\nvalor de error "+errors.mapped());
        if(errors.isEmpty()){
            db.Producto.update({                                         
                    Codigo: req.body.codigo.trim(),
                    NombreDeProducto: req.body.nombreDelProducto.trim(),
                    Precio: Number(req.body.precioProd),                    
                    Tamanio: req.body.tamanioJue.trim(),
                    Idioma: req.body.idiomaJuego.trim(),                    
                    IdiomaSubt: req.body.subtitulo.trim(),     
                    Categoria: req.body.categoriaJuego.trim(),                                    
                    FechaLanzamiento: req.body.fechaLanzam,
                    Stock: Number(req.body.stock), 
                    Descuento: Number(req.body.descuento),    
                    OfertasUtimosJuegos: req.body.OfertasUtimosJuegos,
                    OfertasDeLaSemana: req.body.OfertasDeLaSemana,
                    DescripcionCorta: req.body.DescripcionCorta.trim(),                    
                    Imagen: (req.files[0]) ? req.files[0].filename : req.body.imagen,
                },
                {
                    where: {
                    IdJuego: idproducto
                }
                });
                res.redirect('/productos')    
            }else{
                db.Producto.findByPk(idproducto).then(resultados=>{
                res.render("productShow",{
                    title:"con errores",                
                    errors:errors.mapped(), 
                    old:req.body,                               
                    user:req.session.user,
                    producto:resultados
                })
            })
        }
                                             
    },

    //OK realizado
    eliminar:function(req,res){
        let idProducto = req.params.id;
            
        db.Producto.destroy({
                where: {
                IdJuego: idProducto,
            }
            });          
            
            res.redirect('/productos')                                   
        },        
    
    
}