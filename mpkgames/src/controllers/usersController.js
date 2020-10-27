// const dbUsers = require('../data/dataUsers');
const db = require("../database/models")
const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypt =require('bcrypt');

module.exports ={
    agregar: function(req, res){
      res.render("register",{
        title:"Registro de Usuario",            
        user:req.session.user
      })  
    }, 

    registrarse: function(req,res){
        let errors = validationResult(req);
        
        if(errors.isEmpty()){

            db.User.create(
             {
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                usu_CodigoArea: req.body.usu_CodigoArea,
                usu_Telefono: req.body.usu_Telefono,
                email:req.body.email,
                contraseña:bcrypt.hashSync(req.body.contraseña,10),
                avatar:(req.files[0])?req.files[0].filename:"default.png",
                rol:"user"
            }
          )

          .then(result => {
            console.log(result)
            return res.redirect('/users/login')
        })  
        .catch(errores => {
            console.log(errores)
        })
        }else{     
            res.render("register",{
                title:"con errores",                
                errors:errors.mapped(), 
                old:req.body,                               
                user:req.session.user
            })
        }
    },

     MostraLogin: function(req, res){
         res.render("login",{
            title:"Ingreso de Usuarios",            
            user:req.session.user
        }) 
      },

      processLogin:function(req,res){

        let errors = validationResult(req);
        if(errors.isEmpty()){
           db.User.findAll().then(function(resultados){
            for(let i=0;i<resultados.length;i++){
                if(req.body.email==resultados[i].email && bcrypt.compareSync(req.body.contraseña,resultados[i].contraseña)){

                    req.session.user={
                        id: resultados[i].id,
                        nick: "Hola "+resultados[i].nombre,
                        avatar: resultados[i].avatar,
                        rol:resultados[i].rol
                    }
                }
            }
        
            if(req.body.recordar){
                res.cookie('userMPKGames',req.session.user,{maxAge:1000*60*5})
            }
            return res.redirect('/')      
        });
        }else{     
            return res.render('login',{
                title:"Error en Ingreso de credenciales",                
                errors: errors.mapped(), 
                old:req.body,                  
                user:req.session.user
            })
        }
    },

    logout:function(req,res){
        req.session.destroy();
        if(req.cookies.userMPKGames){
            res.cookie('userMPKGames','',{maxAge:-1})
        }
        res.redirect('/')
    },
 }
