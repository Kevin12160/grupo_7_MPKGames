const dbUsers = require('../data/dataUsers');

const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = [
    check('usu_email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('usu_email')
    .custom(function(value){
       let usuario = dbUsers.filter(function(usuario){
           return usuario.email == value
       })

       if(usuario == false){
           return false
       }else{
           return true
       }
    })
    .withMessage('El usuario no está registrado'),
    
    body('usu_password')
    .custom(function(value,{req}){
        let result = true;

        dbUsers.forEach(user => {
            if(user.email == req.body.usu_email){
                if(!bcrypt.compareSync(value,user.contraseña)){
                    result = false
                }
            }
        });

        if (result == false){
            return false
        }else{
            return true
        }        
    })
    .withMessage("Contraseña incorrecta")
]