window.addEventListener("load",function(){

     // let inputAvatar = document.getElementById('AvatarImg')   
     
      let inputAvatar = document.getElementsByClassName('avatar')
   
   let avatarNuevo = "default.png"
       //de lo que me decueklve el apiuser/UserIDAvatar 
       fetch("//localhost:3000/apiuser/UserIDAvatar")
       .then(function(response){
               return response.json()
           })           

           .then(function(information) {
               console.log(information);
                 avatarNuevo = information[0].avatar
               //avatarNuevo = information.avatar
               
               localStorage.setItem("avatar", "/images/Avatares/" + avatarNuevo);
               console.log("el avatar es " + avatarNuevo)               
                  console.log("el avatar de " + information[0].nombre + " es " + avatarNuevo)   
               //  inputAvatar.innerHTML.value = avatarNuevo
               inputAvatar.setAttribute("src","/images/Avatares/" + avatarNuevo)
          })
           .catch(function(error) {
               console.log("errores :  " + error);
           })  
          
               

})