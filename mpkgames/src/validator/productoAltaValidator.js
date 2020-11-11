const db = require('../database/models');

const {check,validationResult,body} = require('express-validator');

 var moment = require('moment'); // require

module.exports = [

    check('codigo')
    .isLength({
        min:5,
        max:100
    }).withMessage('EL Codigo del producto debe tener minimo 5 caracteres y un maximo de 45 caracteres'),

    
    check('nombreDelProducto')
    .isLength({
        min:5,
        max:100
    })
    .withMessage('EL nombre del producto debe tener minimo 5 caracteres y un maximo de 100 caracteres'),

    check('detalle')
    .isLength({
        min:20,
        max:100
    })
    .withMessage('La descripcion del producto debe tener minimo 20 caracteres y un maximo de 100 caracteres'),


    check('precioProd')    
    .not()
    .isEmpty()
    .withMessage('El Precio no puede estar vacio'),
    
    check('stock')    
    .not()
    .isEmpty()
    .withMessage('El Stock no puede estar vacio'),

    
    body('fechaLanzam')
    .custom(value => {
        let fechaActual = moment()

        if(moment(value) > fechaActual){
            console.log('fecha invalida en Back')
            return false
        }else{
            console.log('todo bien! en back')
            return true
        }
    }).withMessage('La fecha no puede ser mayor a la fecha actual') , 

    
    check('tamanioJue')
    .not()
    .isEmpty()
    .withMessage('Tamaño del Juego is requerido'),
  
    // body("imagen")
    // .custom(function(value,{req}){
       
    //     if(req.files[0] == undefined){
    //         return false;
    //     }else{
    //         value = req.files[0].originalname
            
    //         if((/.(gif|jpeg|jpg|png)$/i).test(path.extname(value))){
    //             return true
    //         }else{
    //             return false
    //         }
    //     }
        
    // }).withMessage("Cambiar imagen con algun formato compatible (.jpg/.png/.jpeg/.gif)")

    
]