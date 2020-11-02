window.onload = function(){
    let inputNombre = document.getElementById("nombre")
    let inputApellido = document.getElementById("apellido")
    let inputUsu_Telefono = document.getElementById("usu_Telefono")
    let inputEmail = document.getElementById("email")
    let inputContraseña = document.getElementById("contraseña")
    let inputContraseña2 = document.getElementById("contraseña2")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/

    
    

    inputNombre.onkeyup = function(){
        if(inputNombre.value.length < 3 ){
            inputNombre.classList.add("is-invalid")
        }else{
            inputNombre.classList.remove("is-invalid")
            inputNombre.classList.add("is-valid")
        }
    }
    inputApellido.onkeyup = function(){
        if(inputApellido.value.length < 3 ){
            inputApellido.classList.add("is-invalid")
        }else{
            inputApellido.classList.remove("is-invalid")
            inputApellido.classList.add("is-valid")
        }
    }

    inputUsu_Telefono.onkeyup = function(){
        if(inputUsu_Telefono.value.length < 8 ){
            inputUsu_Telefono.classList.add("is-invalid")
        }else{
            inputUsu_Telefono.classList.remove("is-invalid")
            inputUsu_Telefono.classList.add("is-valid")
        }
    }

   inputEmail.onkeyup = function(){
    if(!regexEmail.test(inputEmail.value)){
        inputEmail.classList.add("is-invalid")
   }else{
       inputEmail.classList.remove("is-invalid")
       inputEmail.classList.add("is-valid")
   }
  }

  inputContraseña.onkeyup = function(){
    if(inputContraseña.value.length < 6 ||  inputContraseña.value.length > 12 ){
        inputContraseña.classList.add("is-invalid")
    }else{
        inputContraseña.classList.remove("is-invalid")
        inputContraseña.classList.add("is-valid")
    }

  }

  inputContraseña2.onkeyup = function(){
    if(inputContraseña2.value !==  inputContraseña.value  ){
        inputContraseña2.classList.add("is-invalid")
    }else{
        inputContraseña2.classList.remove("is-invalid")
        inputContraseña2.classList.add("is-valid")
    }

  }




}