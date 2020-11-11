

window.onload = function(){
    let loginForm = document.getElementById("loginForm")
    let inputEmailLogin = document.getElementById("emailLogin")
    let smallEmailLogin = document.getElementById("smallEmailLogin")
    let inputContraseñaLogin = document.getElementById("contraseñaLogin")
    let smallContraseñalLogin = document.getElementById("smallContraseñaLogin")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/

   let errores = 'undefined'

    inputEmailLogin.onkeyup = function(){

        let errores = "undefined"

         if(!regexEmail.test(inputEmailLogin.value)){            
            inputEmailLogin.classList.add("is-invalid")
            smallEmailLogin.innerHTML = "tiene que tener formato email"
            errores = true
      }else{
            inputEmailLogin.classList.remove("is-invalid")
           inputEmailLogin.classList.add("is-valid") 
           smallEmailLogin.innerHTML = ""
           errores = false
        }
       }


      inputContraseñaLogin.onkeyup = function(){
        if(inputContraseñaLogin.value.length < 6 ||  inputContraseñaLogin.value.length > 12 ){
            inputContraseñaLogin.classList.add("is-invalid")
            smallContraseñalLogin.innerHTML = "Tiene que tener entre 6 y 12 caracteres"
        errores = true
        }else{
            inputContraseñaLogin.classList.remove("is-invalid")
            inputContraseñaLogin.classList.add("is-valid")
            smallContraseñalLogin.innerHTML = ""
            errores= false
        }
    
      } 

      console.log(errores)  
      

   loginForm.addEventListener("submit",function(event){
       
    if(errores == true || errores == "undefined" ){
        console.log("No envio el form")
        event.preventDefault()
        inputEmailLogin.classList.add("is-invalid")
        smallEmailLogin.innerHTML = "no puede estar vacio"
        inputContraseñaLogin.classList.add("is-invalid")
        smallContraseñalLogin.innerHTML = "No puede estar vacio"
    }else{
        console.log("se envio")
    }

})

 }