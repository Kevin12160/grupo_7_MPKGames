const dbProduct = require('../data/database'); //requiero la base de datos de productos


const fs = require('fs');
const path = require('path');



module.exports = { //exporto un objeto literal con todos los metodos
    listar: function(req, res) {
        let  totalDeProductos =  dbProduct.length;

        res.render('productosLista', {
                title: "Todos los Productos",
                productos: dbProduct,
                totalDeProductos: totalDeProductos,   
                user: req.session.user,             
            }) //muestra información de prueba
    },



    enCarrito: function(req, res) {
        let productoEnCarrito = dbProduct.filter(producto => {
            return producto.AgregadoAlCarrito == true
        })        
        
        res.render('productCart', { //renderizo en el navegador la vista index que contiene el HOME del sitio
            title: 'Carrito de Compras', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
            productoEnCarrito: productoEnCarrito ,
            user: req.session.user,          
        })
    },
    
    search:function(req,res){
        let buscar = req.query.search;
        let resultados=[];

        dbProduct.forEach(producto=>{
            if(producto.NombreDeProducto.toLowerCase().includes(buscar.toLowerCase())){
                resultados.push(producto)
            }
        })
        res.render('productosLista',{
            title:"Resultado de la busqueda",
            productos:resultados,
            totalDeProductos: dbProduct.length,
            user: req.session.user,  
        })
    },

    detalle:function(req,res){
        let id = req.params.id;
        let CategoriaDelJuego = "";

        let producto = dbProduct.filter(producto=>{
            return producto.IDJuego == id
        })
        // console.log(producto[0].Categoria)
        CategoriaDelJuego = producto[0].Categoria
        
        let productoSegunCategoria = dbProduct.filter(producto => {
            return producto.Categoria == CategoriaDelJuego
        })   
            

        res.render('productDetail',{
            title:"Detalle del Producto",
            producto:producto[0],
            productoSegunCategoria: productoSegunCategoria,
            user: req.session.user,   
        })
    },

    AbreFormAgregar:function(req,res){        
        res.render('productAdd',{
            title:"Agregar Producto",
            user: req.session.user,  
        })
    },
   
    // praticando me di cuenta que si cargo los name del body 
    //no me sobreescbrie todo el objeto solo la propieda que le indico 
    //que raro??
    AgregarAlCarritoDeCompras: function(req,res){
        let idproducto = req.params.id;

        dbProduct.forEach(producto=>{
            if(producto.IDJuego==idproducto){
                producto.AgregadoAlCarrito = true;
            }
        })
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')            
         res.redirect('/productos/carritoCompras/')
    },

    publicar:function(req,res,next){
        // res.send(req.files);
        let lastID = 1;

        dbProduct.forEach(producto=>{
            if(producto.IDJuego > lastID){
                lastID = producto.IDJuego
            }
        })

        let newProduct ={
            IDJuego: lastID + 1,
            Codigo: req.body.Codigo,                    
            NombreDeProducto: req.body.nombreDelProducto,
            Precio:Number(req.body.precioProd),
            Tamaño: req.body.tamanioJue,
            Idioma: req.body.idiomaJuego,                    
            IdiomaSubt: req.body.subtitulo,     
            Categoria: req.body.categoriaJuego,                                    
            FechaLanzamiento: req.body.fechaLanzam,
            Descuento:  Number(req.body.descuento),
            Stock: Number(req.body.stock),    
            DescripcionCorta: req.body.detalle,
            Calificacion: "",
            OfertasUtimosJuegos: "",
            OfertasDeLaSemana: "",
            AgregadoAlCarrito: "",
            Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }

        dbProduct.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')
        
        res.redirect('/productos')
        // no tengo render como para mandar el user: req.session.user, 
        // como tendria que hacer ?? porque me cierra la session al no envaar el user: req.session.user
        
    },

    show:function(req,res){
        let idProducto = req.params.id;       
        
        let resultado = dbProduct.filter(producto =>{
            return producto.IDJuego == idProducto
        })
        res.render('productShow',{
            title: "Ver/Editar Producto",
            producto: resultado[0], 
            user: req.session.user,              
        })
    },

    actualizar:function(req,res){
        let idproducto = req.params.id;

            dbProduct.forEach(producto=>{
                if(producto.IDJuego==idproducto){
                    producto.IDJuego = Number(req.body.id);                    
                    producto.Codigo = req.body.codigo.trim();
                    producto.NombreDeProducto = req.body.nombreDelProducto.trim();
                    producto.Precio = Number(req.body.precioProd);                    
                    producto.Tamanio = req.body.tamanioJue.trim();
                    producto.Idioma = req.body.idiomaJuego.trim();                    
                    producto.IdiomaSubt = req.body.subtitulo.trim();     
                    producto.Categoria = req.body.categoriaJuego.trim();                                    
                    producto.FechaLanzamiento = req.body.fechaLanzam;
                    producto.Stock = Number(req.body.stock); 
                    producto.Descuento = Number(req.body.descuento);    
                    producto.OfertasUtimosJuegos = req.body.OfertasUtimosJuegos;
                    producto.OfertasDeLaSemana = req.body.OfertasDeLaSemana;
                    producto.DescripcionCorta = req.body.DescripcionCorta.trim();
                    producto.Imagen= (req.files[0]?req.files
                        [0].filename:producto.Imagen);
                }
            })
            
            fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')            
            // res.redirect('/productos', {user: req.session.user}) 
              res.redirect('/productos')           
             // no tengo render como hago mandar el user: req.session.user, 
            // como tendria que hacer ?? porque me cierra la session al no envaar el user: req.session.user
             
    },

    eliminar:function(req,res){
        let idProducto = req.params.id;
          let aEliminar;     
           
        dbProduct.forEach(producto=>{
            if(producto.IDJuego == idProducto){
                aEliminar = dbProduct.indexOf(producto);
            }   
            })
            dbProduct.splice(aEliminar,1) 

              
            fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')
            res.redirect('/productos/')
             
        },
        retiraDelCarrito:function(req,res){          
            let idproducto = req.params.id;

            dbProduct.forEach(producto=>{
                if(producto.IDJuego==idproducto){
                    producto.AgregadoAlCarrito = false;
                }
            })
            
            fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')            
             res.redirect('/productos/carritoCompras/')
            }
              // no tengo render como hago mandar el user: req.session.user, 
        // como tendria que hacer ?? porque me cierra la session al no envaar el user: req.session.user
    
    
}