const dataBase=require("../data/dataUsers");

const {check,validationResult,body}=require("express-validator");

const bcrypt=require("bcrypt");

module.exports=[

    body('usu_email').custom(function(value){

        if(value){
            return true
        }else{
            return false
        }
    }).withMessage("Escribe una dirección de correo electrónico"),


    check('usu_email').isEmail().withMessage("Ingrese su mail correctamente"),

    body('usu_email').custom(function(value){
        let arrayUsers=[];
        dataBase.forEach(element => {
            arrayUsers.push(element.email);
        });

        return (arrayUsers.includes(value));
    }).withMessage("El email ingresado no esta registrado."),
    
    body('usu_password').custom(function(value){

        if(value){
            return true
        }else{
            return false
        }
    }).withMessage("No ingreso una contraseña"),



    body('usu_password').custom(function(value){

        console.log("\n\n el valor de value: "+value+"\n\n");

        let arrayPass=[]

        dataBase.forEach(element=>{
            arrayPass.push(element.contraseña);
        });

        for(let i=0;i<arrayPass.length;i++){
            if(bcrypt.compareSync(value,arrayPass[i])){
                return(bcrypt.compareSync(value,arrayPass[i]));
            }
        }

    }).withMessage("La contraseña ingresada es incorrecta")
]
