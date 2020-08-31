const dbUsers = require('../data/dataUsers');
const fs = require('fs');
const path = require('path');


module.exports ={
    agregar: function(req, res){
      res.render("register")
    },
    registrarse: function(req,res){
        let lastID = 1;
        res.send(req.body)
        dbUsers.forEach(user=>{
            if(user.id > lastID){
                lastID = user.id
            }
        })
        let newUsuario ={
            id: lastID + 1,
            nombre: req.body.nombre.trim(),
            apellido: req.body.apellido.trim(),
            codArea:  Number(req.body.codArea),
            telefono: Number(req.body.telefono),                     
            email: req.body.email.trim(),     
            contraseña: req.body.contraseña.trim(),                                       
            //Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }

        dbUsers.push(newUsuario);
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"user.json"),JSON.stringify(dbUsers),'utf-8')
        
        res.redirect('/registroUsuarios')
    },
    login: function(req, res){
       res.send("logeado")
    }
 }
