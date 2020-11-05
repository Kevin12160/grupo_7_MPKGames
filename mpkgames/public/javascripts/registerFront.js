
window.onload = function(){
    let registerForm = document.getElementById("registerForm")
    let inputNombre = document.getElementById("nombre")
    let smallNombre = document.getElementById("smallNombre")
    let inputApellido = document.getElementById("apellido")
    let smallApellido = document.getElementById("smallApellido")
    let inputUsu_Telefono = document.getElementById("usu_Telefono")
    let smallTelefono = document.getElementById("smallTelefono")
    let inputEmail = document.getElementById("email")
    let smallEmail = document.getElementById("smallEmail")
    let inputContraseña = document.getElementById("contraseña")
    let smallContraseña = document.getElementById("smallContraseña")
    let inputContraseña2 = document.getElementById("contraseña2")
    let smallContraseña2 = document.getElementById("smallContraseña2")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
   

    inputEmail.onblur = function(){
        fetch("//localhost:3000/apiuser/allUsers")
        .then(function(response){
                return response.json()
            })
            .then(function(information) {
                // console.log(information);
                information.forEach(element => {
                    // console.log(element.email)
                    if(inputEmail.value == element.email){
                        inputEmail.classList.add("is-invalid")
                        smallEmail.innerText="El mail ya esta registrado"                            
                    }
                });
            })
            .catch(function(error) {
                console.log("Error: " + error);
            })       

    }

    inputEmail.onfocus = function(){
        smallEmail.innerText=""
    }

    inputEmail.onkeyup = function(){
        if(!regexEmail.test(inputEmail.value)){            
            inputEmail.classList.add("is-invalid")
       }else{
           inputEmail.classList.remove("is-invalid")
           inputEmail.classList.add("is-valid") 
       }
      }




    let errores=[]     


    inputNombre.onkeyup = function(){
        if(inputNombre.value.length < 3 ){
            inputNombre.classList.add("is-invalid")
            smallNombre.innerHTML = "Tiene que tener minimo 3 letras"
            errores.push(true)
        }else{
            inputNombre.classList.remove("is-invalid")
            inputNombre.classList.add("is-valid")
            smallNombre.innerHTML = ""
            errores=[]
    }

    inputApellido.onkeyup = function(){
        if(inputApellido.value.length < 3 ){
            inputApellido.classList.add("is-invalid")
            smallApellido.innerHTML = "Tiene que tener minimo 3 letras"
            errores.push(true)
        }else{
            inputApellido.classList.remove("is-invalid")
            inputApellido.classList.add("is-valid")
            smallApellido.innerHTML = ""
            errores=[]
        }
    }

    inputUsu_Telefono.onkeyup = function(){
        if(inputUsu_Telefono.value.length < 8 ){
            inputUsu_Telefono.classList.add("is-invalid")
            smallTelefono.innerHTML = "Tiene que tener minimo 8 numeros"
            errores.push(true)
        }else{
            inputUsu_Telefono.classList.remove("is-invalid")
            inputUsu_Telefono.classList.add("is-valid")
            smallTelefono.innerHTML = ""
            errores=[]
        }
    }



  inputContraseña.onkeyup = function(){
    if(inputContraseña.value.length < 6 ||  inputContraseña.value.length > 12 ){
        inputContraseña.classList.add("is-invalid")
        smallContraseña.innerHTML = "Tiene que tener entre 6 y 12 caracteres"
        errores.push(true)
    }else{
        inputContraseña.classList.remove("is-invalid")
        inputContraseña.classList.add("is-valid")
        smallContraseña.innerHTML = ""
        errores=[]
    }

  }

  inputContraseña2.onkeyup = function(){
    if(inputContraseña2.value !==  inputContraseña.value  ){
        inputContraseña2.classList.add("is-invalid")
        smallContraseña2.innerHTML = "Las dos contraseñas deben coincidir"
        errores.push(true)
    }else{
        inputContraseña2.classList.remove("is-invalid")
        inputContraseña2.classList.add("is-valid")
        smallContraseña.innerHTML = ""
        errores=[]
    }

  }

console.log(errores.length)

   }

   registerForm.addEventListener("submit",function(event){
       
    if(errores.length> 0 ){
        console.log("No envio el form")
        event.preventDefault()
    }

})


}