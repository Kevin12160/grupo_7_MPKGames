
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {    

    enCarrito: function(req, res) {         
        let productoEnCarrito = []
        let sumaTotal = 0;


        db.Carrito.findAll({
            where: {usuario_id: req.cookies.idUsuario},
             include : [{ association: 'Producto'}],  //Pendiente a consultar
            
        }).then(resultados=>{
                productoEnCarrito = resultados                                                
                    //    res.send(resultados)

                     resultados.forEach(element => {
                        sumaTotal += element.precio
                     });
        res.render('productCart', { 
            title: 'Carrito de Compras', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
            productoEnCarrito: productoEnCarrito ,   
            TotalImporteCarrito:sumaTotal,          
            user: req.session.user,          
        })     
    })
    } ,
    
   // ok
    agregarAlCarrito:function(req,res,next){        
        db.Carrito.create({            
            // esta lineas hacerlas bien luego buscando ..
            usuario_id: req.cookies.idUsuario,
            cantidad: 1,
            juego_id: req.body.IdJuego,            
            precio:Number(req.body.precioDescuento),            
            fecha: Date()
        })
        .then(result => {            
            res.redirect('/carritos/enCarritoCompras/')
        })
        .catch(err => {
            res.send(err)
        })        
    },
          

    //
    eliminarDelCarrito:function(req,res){
        let idcarrito = req.params.id;    
                
        db.Carrito.destroy({
                where: {
                    idcarrito: idcarrito,
            }
            });   
            res.redirect('/carritos/enCarritoCompras/')                                               
    },
       
       
    FinalizarCompra:function(req,res){
        let idUsuario =  req.params.id;         
        console.log(idUsuario)
        
        db.Carrito.destroy({
                where: {
                    usuario_id: idUsuario,
                    // usuario_id: req.cookies.idUsuario
            }
            })   
            .then(result=>{
                // console.log(result)                
                res.redirect('/')  
            })
            .catch(errores=>{
                console.log(errores)
            })        
                                                         
    },

    actualizarCantidadAComprar:function(req,res){
            let idproducto = req.params.id;
            db.Carrito.update({                                                             
                        cantidad: Number(req.body.cantidad),            
                    },
                    {
                        where: {
                        IdJuego: idproducto
                    }
                    });
                  
                res.redirect('/carritos/enCarritoCompras/')                                   
        },
        Mientrega: function(req, res){


            res.render("miEntrega",{
                title: "Mi entrega",
                user: req.session.user
            })
 
        },

        MiPago: function(req, res){


            res.render("miPago",{
                title: "Mi Pago",
                user: req.session.user
            })
 
        },
        MiResumen: function(req, res){


            res.render("miResumen",{
                title: "Mi Compra",
                user: req.session.user
            })
 
        }

 
}