const dbUsers = require('../data/dataUsers');
const fs = require('fs');
const path = require('path');
const {validationResult, body} = require('express-validator');
const bcrypt =require('bcrypt');

module.exports ={
    agregar: function(req, res){
      res.render("register") 
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

            dbUsers.push(nuevoUsuario);

            fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
            return res.redirect('/login')
        }else{
            res.render('register',{
                title:"Registro de Usuarios",
                css:'index.css',
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
     agrege: function(req, res){
         res.render("logine")
      },

    login: function(req, res){
       res.send("logeado")
    }
 }
