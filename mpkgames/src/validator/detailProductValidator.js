const {check,validatorDefault,body}=require("express-validator");
const moment = require("moment");
//requerimos la libreria moment

const path = require('path');


module.exports=[

    check("nombreDelProducto")
    .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),

    check("DescripcionCorta")
    .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),

    check("codigo")
    .isLength({min:1, max:5}).withMessage("Debe tener como maximo 5 caracteres"),

    check("precioProd")
    .isInt({min:0,max:999999}).withMessage("Ingrese solo numeros"),

    check("tamanioJue")
    .isLength({min:1,max:6}).withMessage("Debe ingresar como maximo 6 caracteres"),

    check("idiomaJuego")
    .isLength({min:1,max:16}).withMessage("Debe ingresar como maximo 16 caracteres"),

    check("categoriaJuego")
    .isLength({min:1,max:13}).withMessage("Ingresar como maximo 13 caracteres"),

    check("subtitulo")
    .isLength({min:1,max:16}).withMessage("Debe ingresar como maximo 16 caracteres"),
    
    body("fechaLanzam").custom((value)=>{
        let fechaNew=moment().format("YYYY-MM-DD");
        console.log("\n\n validator");
 
        return(moment(value).isBetween('1962-10-19', fechaNew))

    }).withMessage("No se admiten fechas posteriores a la actual"),

    check("stock")
    .isInt({min:1,max:99}).withMessage("limite de stock 99, no admite negativos"),

    check("descuento").isInt({min:0,max:100}).withMessage("limite del descuento 100, no admite negativos"),

   body("imagen").custom(function(value,{req}){
       
        if(req.files[0]){
            value = req.files[0].originalname

            if(!(/.(gif|jpeg|jpg|png)$/i).test(path.extname(value))){
                return false
            }
        }
        return true;
    }).withMessage("Cambiar imagen con algun formato compatible (.jpg/.png/.jpeg/.gif)")

]