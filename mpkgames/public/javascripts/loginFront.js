
window.onload = function(){
    let formLogin = document.getElementById("formLogin")
    let inputEmailLogin = document.getElementById("emailLogin")
    let smallEmailLogin = document.getElementById("smallEmailLogin")
    let inputContraseñaLogin = document.getElementById("contraseñaLogin")
    let smallContraseñalLogin = document.getElementById("smallContraseñaLogin")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/



    let errores=[]

    

    inputEmailLogin.onkeyup = function(){
        if(!regexEmail.test(inputEmailLogin.value) ){
            inputEmailLogin.classList.add("is-invalid")
            smallEmailLogin.innerHTML = "Tiene que tener formato Email"
            errores.push(true)
       }else{
           inputEmailLogin.classList.remove("is-invalid")
           inputEmailLogin.classList.add("is-valid")
           smallEmailLogin.innerHTML = ""
            errores=[]
       }
      }
    

      inputContraseñaLogin.onkeyup = function(){
        if(inputContraseñaLogin.value.length < 6 ||  inputContraseñaLogin.value.length > 12 ){
            inputContraseñaLogin.classList.add("is-invalid")
            smallContraseñalLogin.innerHTML = "Tiene que tener entre 6 y 12 caracteres"
        errores.push(true)
        }else{
            inputContraseñaLogin.classList.remove("is-invalid")
            inputContraseñaLogin.classList.add("is-valid")
            smallContraseñalLogin.innerHTML = ""
            errores=[]
        }
    
      } 

      console.log(errores.length)
      

   formLogin.addEventListener("submit",function(event){
       
    if(errores.length> 0 ){
        console.log("No envio el form")
        event.preventDefault()
    }

})

}