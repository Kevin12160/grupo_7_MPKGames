
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

module.exports = { //exporto un objeto literal con todos los metodos
    
    all: function(req, res) {
        db.Producto.findAll()
            .then(resultdo=>{                
                res.json(resultdo)                
            })
    },
    TotalesCarrito: function(req, res) {       
        let sumaTotal = 0;
        let CantTotal = 0;
        
        db.Carrito.findAll({
            where: {usuario_id: req.cookies.idUsuario}                      
            
        }).then(resultados=>{
                                //  res.send(resultados)
                     resultados.forEach(element => {
                        sumaTotal += element.precio
                        CantTotal += element.cantidad
                     });
        res.json({             
            CantidadTotal: CantTotal ,   
            TotalImporteCarrito:sumaTotal,                  
        })     
    })
    }
}