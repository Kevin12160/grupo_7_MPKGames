window.onload = function(){
    var CantidadTotal = 0
    var TotalImporteCarrito = 0

        fetch("//localhost:3000/api/totalesCarritoUser")
        .then(function(response){
                return response.json()
            })
            .then(function(information) {
                 console.log(information.CantidadTotal);
                 console.log(information.TotalImporteCarrito);

                 CantidadTotal = information.CantidadTotal
                 TotalImporteCarrito = information.TotalImporteCarrito
                //  information.forEach(element => {
                //  });
                return CantidadTotal
            })
            .catch(function(error) {
            console.log("Error: " + error);
            })  

}