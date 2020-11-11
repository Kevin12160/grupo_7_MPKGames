console.log("Cargo BIEN")
const qs = function(elemet){
    return document.querySelector(elemet);
}

window.addEventListener("load",function(){
    

    let form = document.getElementById("formAdd")        
    let divErrores = document.querySelector('.errores')

    let inputCodigo = document.getElementById('codigo')    
    let EtqErrorCodigo = document.getElementById("errorCodigo")

    let inputNombreDelProducto = document.getElementById("nombreDelProducto")
    let EtqerrorNombreProducto = document.getElementById("errorNombreProducto")
    
    let inputDetalle = document.getElementById("detalle")
    let EtqerrorDetalle = document.getElementById("errordetalle")
    


    let inputPrecioJuego = document.getElementById('precioJuego')    
    let EtqErrorPrecioJuego = document.getElementById("errorPrecio")

    let inputStock = document.getElementById('stock')    
    let EtqErrorStock = document.getElementById("errorStock")

    let inputImagen = document.getElementById('imagen')   
    let errorFoto = document.getElementById('errorFoto')       
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let imputFechaLanzamiento = document.getElementById('fecha')

    inputImagen.addEventListener('change',function() {      
        
        if(!regExExtensions.exec(inputImagen.value)){    
            errorFoto.innerText = "Solo imagenes con extension jpg, jpeg, png, o gif"
            inputImagen.classList.remove("is-valid")
            inputImagen.classList.add('is-invalid')
            inputImagen.value = '';        
        } else{            
            errorFoto.innerText =""
            inputImagen.classList.remove("is-invalid")
            inputImagen.classList.add("is-valid")
            
        }
    })


    var erroresArray = [] 

//Aqui solo validaciones cuando es keyup al teclear    
    inputNombreDelProducto.addEventListener('keyup',function(){
        if(inputNombreDelProducto.value.length <5){   
            inputNombreDelProducto.classList.add("is-invalid")                    
            EtqerrorNombreProducto.innerText = "caracteres son: "+ inputNombreDelProducto.value.length + " .EL nombre del producto debe tener minimo 20 caracteres y un maximo de 100 caracteres"                       
        }else{
            inputNombreDelProducto.classList.remove("is-invalid")
            inputNombreDelProducto.classList.add("is-valid")
            EtqerrorNombreProducto.innerText = ""
        }       
    })  
    //Descripcion 
    inputDetalle.addEventListener('keyup',function(){
        if( inputDetalle.value.length <20){   
            inputDetalle.classList.add("is-invalid")                    
            EtqerrorDetalle.innerText = "caracteres son: "+ inputDetalle.value.length + " .La descripcion del producto debe tener minimo 20 caracteres y un maximo de 100 caracteres"                       
        }else{
            inputDetalle.classList.remove("is-invalid")
            inputDetalle.classList.add("is-valid")
            EtqerrorDetalle.innerText = ""
        }       
    }) 

//Codigo
    inputCodigo.addEventListener('keyup',function(){
        if(inputCodigo.value.length <5){     
            inputCodigo.classList.add("is-invalid")                    
            EtqErrorCodigo.innerText = "caracteres son: " + inputCodigo.value.length + " .EL codigo del producto debe tener minimo 5 caracteres y un maximo de 45 caracteres"            
        }else{
            inputCodigo.classList.remove("is-invalid")
            inputCodigo.classList.add("is-valid")
            EtqErrorCodigo.innerText = ""      
        }        
    })
//Precio
    inputPrecioJuego.addEventListener('keyup',function(){
        if(inputPrecioJuego.value == ""){           
            inputPrecioJuego.classList.add("is-invalid")          
                EtqErrorPrecioJuego.innerText = "El Precio del producto no puede estar vacio."                 
        }else{                
            inputPrecioJuego.classList.remove("is-invalid")
            inputPrecioJuego.classList.add("is-valid")
                EtqErrorPrecioJuego.innerText = ""                               
        }            
    })  
//Stock 
    inputStock.addEventListener('keyup',function(){
        if(inputStock.value == ""){        
            inputPrecioJuego.classList.add("is-invalid")                                                  
            EtqErrorStock.innerText =  "EL Stock del producto no puede estar vacio"            
        }else{
            inputPrecioJuego.classList.remove("is-invalid")
            inputPrecioJuego.classList.add("is-valid")
            EtqErrorStock.innerText = ""
        }              
    }) 
   


// *************************************** 
//Aqui lo uso cuando hace click en agregar
// *************************************** 

    function nombreDelProducto(){
        if(inputNombreDelProducto.value.length <5){                       
            return  true
        }else{
            return  false
        }   
    }
    function detalleDelProducto(){
        if(inputDetalle.value.length <20){                       
            return  true
        }else{
            return  false
        }   
    }

    function codigo(){
        if(inputCodigo.value.length <5){                       
            return true            
        }else{
            return false
        }   
    }
    function precio(){
        if(inputPrecioJuego.value==""){                       
            return true
           
        }else{
            return false
        }   
    }

    function fechaLanzamiento(){
        let fechaActual = Date()
        if(imputFechaLanzamiento.value > fechaActual){
            return true
        }else{
            return false
        }
    }
    
    function validaCampos(){
        var esCorrecto = true;        
        erroresArray=[]
        
        if(nombreDelProducto()){            
            erroresArray.push("Nombre")
            esCorrecto=false;
        }

        if(detalleDelProducto()){            
            erroresArray.push("Detalle")
            esCorrecto=false;
        }
        
        if(codigo()){            
            erroresArray.push("Codigo")
            esCorrecto=false;
        }
        if(precio()){            
            erroresArray.push("Precio")
            esCorrecto=false;
        }
        if(fechaLanzamiento()){            
            erroresArray.push("Fecha de Lanzamiento")
            esCorrecto=false;
        }



        if (esCorrecto==false){
           return false
        }else{
            return true
        }
    }


    form.addEventListener("submit",(e)=>{        
        var mErr = "Corrija los Errores marcados: \n";
        
        if(!validaCampos()){
            erroresArray.forEach( mensajeError => {
                mErr += mensajeError  + " \n"
            })

            e.preventDefault()
            alert(mErr)            
       }else{                   
             form.submit()
       }    
    })


})