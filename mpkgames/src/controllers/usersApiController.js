const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");


module.exports = { //exporto un objeto literal con todos los metodos    
    allUsers: function(req, res) {
        db.User.findAll()
            .then(resultdo=>{                
                res.json(resultdo)                
            })
    },

    UserIDAvatar: function(req, res) {       
        let avatar = "-";
        
        db.User.findAll({
            where: {id: req.cookies.idUsuario}                      
            
        }).then(resultados=>{
                                  res.send(resultados)
                     resultados.forEach(element => {
                        avatar = element.avatar
                        // avatar = resultados.avatar
                     });
        res.json({             
            avatar:avatar,                  
        })    
         
    })
    .catch(error => {
        res.send(error)
    })
    }

}