const dbUsers = require('../data/dataUsers');
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
        let lastID = 0;
        if(dbUsers.length > 0){
            dbUsers.forEach(user=>{
                if(user.id > lastID){
                    lastID = user.id
                }
            })
        }

        if(errors.isEmpty()){
            let nuevoUsuario = {
                id:lastID+1,
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                codArea: req.body.usu_CodigoArea,
                telefono: req.body.usu_Telefono,
                email:req.body.email,
                contraseña:bcrypt.hashSync(req.body.contraseña,10),
                avatar:(req.files[0])?req.files[0].filename:"default.png",
                rol:"user"
            }
            // console.log("------------->>guardo nuevo usuario >>>>> --------- " + errors.isEmpty())
            dbUsers.push(nuevoUsuario);

            fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
            return res.redirect('/users/login')
            
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

      //Procesos de Loguearse , si esta vacio el array de errores entonces entra sino muestra errores
      processLogin:function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
 
            for(let i=0;i<dbUsers.length;i++){
                if(req.body.usu_email==dbUsers[i].email && bcrypt.compareSync(req.body.usu_password,dbUsers[i].contraseña)){
                    console.log("\n\ndentro del for");
                    req.session.user={
                        id: dbUsers[i].id,
                        nick: "Hola "+dbUsers[i].nombre,
                        avatar: dbUsers[i].avatar,
                        TipoUsuario:dbUsers[i].rol
                    }
                }
            }
            if(req.body.recordar){
                res.cookie('userMPKGames',req.session.user,{maxAge:1000*60*5})
            }
            return res.redirect('/')      
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
