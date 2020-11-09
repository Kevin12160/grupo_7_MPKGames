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

      processLogin: function(req,res){
        let url = '/'; //asigno a url la ruta del home
        if(req.session.url){
            url = req.session.url //si se deriva por medio de sessionUserCheck, guardo la url de origen para luego, una vez logueado lo redirija a esa pagina
        }
        let errors = validationResult(req);
        if(errors.isEmpty()){

            db.User.findOne({ //busco el usuario usando el mail ingresado
                where:{
                    email:req.body.email
                },                 
            })
            .then(user => {
                req.session.user = { //asigno a la session un objeto literal con los datos del usuario
                    id: user.id,
                    nick: user.nombre + " " + user.apellido,
                    email: user.email,                    
                    avatar: user.avatar,
                    rol: user.rol,                    
                }
                res.cookie('idUsuario', user.id,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
                
                if(req.body.recordar){ //si viene tildada el checkbox creo la cookie
                    res.cookie('userMPKGames',req.session.user, {maxAge:1000*60*5})                    
                }

                res.locals.user = req.session.user //asigno session a la variable locals
                return res.redirect(url)
            })
            .catch(error => {
                res.send(error)
            })

        }else{
            res.render('login',{
                title:"Ingresá a tu cuenta",                
                errors:errors.mapped(),
                old:req.body
            })
        }

    },
    
    show:function(req,res){
        let idUser = req.params.id;      
        
        db.User.findByPk(idUser)
            .then(function(DetalleUser){   
                // res.send(DetalleUser)                            
                        res.render('usersUpdate',{
                            title:"Ver/Editar Usuario",
                            userAModif: DetalleUser,                                                      
                            user: req.session.user,   
                        })
            })  
        
    },
    
    actualizar:function(req,res){
        let idUser = req.params.id;
        
        db.User.update({                                         
                    apellido: req.body.apellido.trim(),
                    nombre: req.body.nombre.trim(),
                    usu_CodigoArea: req.body.usu_CodigoArea,                    
                    usu_Telefono: req.body.usu_Telefono.trim(),
                    email: req.body.email.trim(),                    
                    contraseña: bcrypt.hashSync(req.body.contraseña,10), 
                    
                    avatar: (req.files[0]) ? req.files[0].filename : req.body.avatar,
                    
                },
                {
                    where: {
                        id: idUser
                }
                });              
            res.redirect('/')                                   
    },

 //OK realizado
 eliminar:function(req,res){
    let idUser = req.params.id;
        
    db.User.destroy({
            where: {
                id: idUser,
        }
        });          
        
        res.redirect('/users/login')                                   
    },        


    logout:function(req,res){
        req.session.destroy();
        if(req.cookies.userMPKGames){
            res.cookie('userMPKGames','',{maxAge:-1})
        }
        res.redirect('/')
    },
 }
