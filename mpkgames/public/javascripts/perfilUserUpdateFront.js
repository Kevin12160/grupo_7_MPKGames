

window.onload = function(){
    let registerForm = document.getElementById("updateUserForm")
    let inputNombre = document.getElementById("nombre")
    let smallNombre = document.getElementById("smallNombre")
    let inputApellido = document.getElementById("apellido")
    let smallTelefono = document.getElementById("smallTelefono")
     let inputEmail = document.getElementById("email")
    let smallEmail = document.getElementById("smallEmail")
    let inputContraseña = document.getElementById("contraseña")
    let smallContraseña = document.getElementById("smallContraseña")
    let inputContraseña2 = document.getElementById("contraseña2")
    let smallContraseña2 = document.getElementById("smallContraseña2")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
   
    // var ExisteMail= false 
// **** del mail VALIDA SI YA EXISTE EL MAIL COMO REGISTRADO****
    // inputEmail.onblur = function(){
    //     fetch("//localhost:3000/apiuser/allUsers")
    //     .then(function(response){
    //             return response.json()
    //         })
    //         .then(function(information) {
    //             information.forEach(element => {
    //                 if(inputEmail.value == element.email){
    //                     ExisteMail = true
    //                     inputEmail.classList.add("is-invalid")
    //                     smallEmail.innerText="El mail ya esta registrado"   
                        
    //                 }else{
    //                     ExisteMail = false
    //                 }
    //             });
    //         })
    //         .catch(function(error) {
    //             console.log("Error: " + error);
    //         })       

    // }

    // inputEmail.onfocus = function(){
    //     smallEmail.innerText=""
    // }


    var erroresArray = [] 
   

    // **** estas validaciones se ejecutan cuando el usuario empieza a escribir en el campo ****

    // **** del mail VALIDA SOL OSI ESTA BIEN ESCRITO****
      inputEmail.addEventListener('change',function() {     
        if(!regexEmail.exec(inputEmail.value)){    
            inputEmail.classList.remove("is-valid")
            inputEmail.classList.add('is-invalid')
            smallEmail.innerHTML = "Tiene que tener formato Email"
            inputEmail.value = '';        
        } else{            
            
            inputEmail.classList.remove("is-invalid")
            inputEmail.classList.add("is-valid") 
            smallEmail.innerHTML = ""           
        }
    })


       // **** del Nombre del usuario ****
    inputNombre.addEventListener('keyup',function(){
        if(inputNombre.value.length < 3 || inputNombre.value.length > 15){   
            inputNombre.classList.add("is-invalid")                    
            smallNombre.innerText = "El nombre debe tener entre 3 y 15 caracteres"                       
        }else{
            inputNombre.classList.remove("is-invalid")
            inputNombre.classList.add("is-valid")
            smallNombre.innerText = ""
        }  
        if( inputNombre.value == inputApellido.value){
            inputNombre.classList.add("is-invalid")
            smallNombre.innerHTML = "No pueden ser iguales"
            errores = true            
        }     
    })  

   // **** del Apellido del usuario ****
    inputApellido.onkeyup = function(){     
        if(inputApellido.value.length < 3 || inputApellido.value.length > 20 ){
            inputApellido.classList.add("is-invalid")
            smallApellido.innerHTML = "EL apellido debe tener entre 3 y 20 caracteres"            
        }else{
            inputApellido.classList.remove("is-invalid")
            inputApellido.classList.add("is-valid")
            smallApellido.innerHTML = ""
        }

        if(  inputNombre.value == inputApellido.value){
            inputApellido.classList.add("is-invalid")
            smallApellido.innerHTML = "No pueden ser iguales"
        }
    }
// **** de contraseña 1 del usuario ****
  inputContraseña.onkeyup = function(){   
    if(inputContraseña.value.length < 6 ||  inputContraseña.value.length > 12 ){
        inputContraseña.classList.add("is-invalid")
        smallContraseña.innerHTML = "Tiene que tener entre 6 y 12 caracteres"       
    }else{
        inputContraseña.classList.remove("is-invalid")
        inputContraseña.classList.add("is-valid")
        smallContraseña.innerHTML = ""        
    }

  }
// **** de contraseña 2 del usuario ****
  inputContraseña2.onkeyup = function(){
    if(inputContraseña2.value !==  inputContraseña.value  ){
        inputContraseña2.classList.add("is-invalid")
        smallContraseña2.innerHTML = "Las dos contraseñas deben coincidir"       
    }else{
        inputContraseña2.classList.remove("is-invalid")
        inputContraseña2.classList.add("is-valid")
        smallContraseña2.innerHTML = ""       
    }

  }

    // *************************************** 
//Aqui lo uso cuando hace click en agregar aunque el usuario no escribio nada o dejo algun campo con error
// *************************************** 
// function mailExiste(){
//     console.log(ExisteMail)
//     if(ExisteMail){                       
//         return  true
//     }else{
//         return  false
//     }   
// }

function nombre(){
    if(inputNombre.value.length <3){                       
        return  true
    }else{
        return  false
    }   
}
function apellido(){
    if(inputApellido.value.length <3){                       
        return  true
    }else{
        return  false
    }   
}

function contraseña(){
    if(inputContraseña.value.length < 6 ||  inputContraseña.value.length > 12 ){                  
        return true            
    }else{
        return false
    }   
}

function contraseña2(){
    if(inputContraseña2.value !==  inputContraseña.value  ){           
        return true            
    }else{
        return false
    }   
}


//AQUI JUNTO TODAS LAS FUNCIONES PARA VER SU RESULTADO
function validaCampos(){
    var esCorrecto = true;        
    erroresArray=[]
       
    // if(mailExiste()){            
    //     erroresArray.push("El Mail ya existe")
    //     esCorrecto=false;
    // }
    if(nombre()){            
        erroresArray.push("Nombre")
        esCorrecto=false;
    }

    if(apellido()){            
        erroresArray.push("Apellido")
        esCorrecto=false;
    }
    
    if(contraseña()){            
        erroresArray.push("Contraseña incorrecta")
        esCorrecto=false;
    }
    if(contraseña2()){            
        erroresArray.push("Segunda contraseña incorrecta ")
        esCorrecto=false;
    }
    
   
    // si ahi algun dato con falso entonces , sino 
    if (esCorrecto==false){
       return false
    }else{
        return true
    }
}




   registerForm.addEventListener("submit",(e)=>{        
    var msjErr = "Corrija los Errores marcados: \n";
    
    if(!validaCampos()){
        erroresArray.forEach( mensajeError => {
            msjErr += mensajeError  + " \n"
        })

        e.preventDefault()
        alert(msjErr)            
   }else{                   
         form.submit()
   }    
})


}