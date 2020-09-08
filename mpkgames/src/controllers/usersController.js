const dbUsers = require('../data/dataUsers');
const fs = require('fs');
const path = require('path');


module.exports ={
    agregar: function(req, res){
      res.render("register")
    },

    registrarse: function(req,res){
        let lastID = 1;
        // res.send(req.body)
        dbUsers.forEach(user=>{
            if(user.id > lastID){
                lastID = user.id
            }
        })
        let newUsuario ={
            id: lastID + 1,
            nombre: req.body.nombre.trim(),
            apellido: req.body.Apellido.trim(),
            codArea:  Number(req.body.usu_CodigoArea),
            telefono: Number(req.body.usu_Telefono),                     
            email: req.body.usu_email.trim(),     
            contraseña: req.body.usu_password.trim(),                                       
            //Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }

        dbUsers.push(newUsuario);
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"user.json"),JSON.stringify(dbUsers),'utf-8')
        
        res.redirect('/registroUsuarios')
    },
     agrege: function(req, res){
         res.render("logine")
      },

    login: function(req, res){
       res.send("logeado")
    }
 }
