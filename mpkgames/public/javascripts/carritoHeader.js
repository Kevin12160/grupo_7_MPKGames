window.onload = function(){

    // let CantidadTotal= document.getElementById("CantTotal")
    let TotalesDelCarrito= document.getElementById("TotalesDelCarrito")
    

        fetch("//localhost:3000/api/totalesCarritoUser")
        .then(function(response){
                return response.json()
            })
            .then(function(information) {
                 console.log(information.CantidadTotal);
                 console.log(information.TotalImporteCarrito);

                //  CantidadTotal.innerHTML = information.CantidadTotal
                 TotalesDelCarrito.innerHTML +=information.CantidadTotal;
               
                
            })
            .catch(function(error) {
            console.log("Error: " + error);
            })  

}