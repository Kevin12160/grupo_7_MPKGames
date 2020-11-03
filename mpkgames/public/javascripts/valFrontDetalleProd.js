
const qs=function(element){

    return document.querySelector(element);
}



window.addEventListener("load",function(){

    let formulario=qs(".formShow");

    console.log(formulario)

    const elementos=formulario.elements;

    let validNombre=qs("#nombreDelProducto")
    //let smallnNmbreProd=qs("#smallNombreProd")

let arrayValidator=[];
let arrayInputs=[]

    for(let i=0;i< elementos.length-1;i++){
        arrayInputs.push(document.getElementById(elementos[i].id))
    }


    if(arrayInputs[0].value!=null){

        arrayInputs[0].classList.add("is-valid");
    }
    
    arrayInputs[0].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[0].nextElementSibling.innerHTML ="Debes completar el campo nombre del juego";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length<5:
                arrayInputs[0].nextElementSibling.innerHTML ="El nombre debe contener almenos 5 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)
                console.log(arrayValidator.length)
                console.log(typeof(smallNombreProd))
            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[0].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
                console.log(arrayValidator.length)
            break;


        }

    })

    if(arrayInputs[1].value!=null){

        arrayInputs[1].classList.add("is-valid");
    }
    
    arrayInputs[1].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[1].nextElementSibling.innerHTML ="Debes completar el campo código del juego";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length>5:
                arrayInputs[1].nextElementSibling.innerHTML ="El codigo del juego debe contener como maximo 5 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)

            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[1].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
            break;


        }

    })

    if(arrayInputs[2].value!=null){

        arrayInputs[2].classList.add("is-valid");
    }
    
    arrayInputs[2].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[2].nextElementSibling.innerHTML ="Debes completar el campo precio";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length>6:
                arrayInputs[2].nextElementSibling.innerHTML ="El precio del juego debe contener como maximo 6 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)

            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[2].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
            break;


        }

    })

    if(arrayInputs[3].value!=null){

        arrayInputs[3].classList.add("is-valid");
    }
    
    arrayInputs[3].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[3].nextElementSibling.innerHTML ="Debe completar el campo tamaño del juego";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length>6:
                arrayInputs[3].nextElementSibling.innerHTML ="El tamaño del juego debe contener como maximo 6 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)

            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[3].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
            break;


        }

    })

    if(arrayInputs[4].value!=null){

        arrayInputs[4].classList.add("is-valid");
    }
    
    arrayInputs[4].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[4].nextElementSibling.innerHTML ="Debes completar el campo idioma del juego";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length>10:
                arrayInputs[4].nextElementSibling.innerHTML ="El idioma del juego debe contener como maximo 10 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)

            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[4].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
            break;


        }

    })

    if(arrayInputs[5].value!=null){

        arrayInputs[5].classList.add("is-valid");
    }
    
    arrayInputs[5].addEventListener("keyup",function(){
        switch(true){
            case this.value==0:
                arrayInputs[5].nextElementSibling.innerHTML ="Debes completar el campo categoria del juego";
                this.classList.add("is-invalid");
               
            break;
            case this.value.trim().length>13:
                arrayInputs[5].nextElementSibling.innerHTML ="La categoria del juego debe contener como maximo 13 caracteres";
                this.classList.add("is-invalid");
                arrayValidator.push(true)

            break;
            default:
                this.classList.remove("is-invalid")
                arrayInputs[5].nextElementSibling.innerHTML ="";
                this.classList.add("is-valid");
                arrayValidator=[]
            break;


        }

    })

    console.log(arrayValidator.length)

   formulario.addEventListener("submit",function(event){
       
        if(arrayValidator.length>0){
            console.log("No envio el form")
            event.preventDefault()
        }else{
            console.log("se envio el form ")
        }

    })
    

})


