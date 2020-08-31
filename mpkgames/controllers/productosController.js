const dbProduct = require('../data/database'); //requiero la base de datos de productos
// const dbCategories = require('../data/dbCategories');

const fs = require('fs');
const path = require('path');
const { json } = require('express');


module.exports = { //exporto un objeto literal con todos los metodos
    listar: function(req, res) {
        res.render('productosLista', {
                title: "Todos los Productos",
                productos: dbProduct
            }) //muestra información de prueba
    },



    enCarrito: function(req, res) {
        let productoEnCarrito = dbProduct.filter(producto => {
            return producto.AgregadoAlCarrito == true
        })        
        
        res.render('productCart', { //renderizo en el navegador la vista index que contiene el HOME del sitio
            title: 'Carrito de Compras', //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home
            productoEnCarrito: productoEnCarrito         
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
            productos:resultados
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
            productoSegunCategoria: productoSegunCategoria 
        })
    },

    AbreFormAgregar:function(req,res){        
        res.render('productAdd',{
            title:"Agregar Producto",
        })
    },
   
    // por el momento no funciona
    AgregarAlCarritoDeCompras: function(req,res){
        let idproducto = req.params.id;

            dbProduct.forEach(producto=>{
                if(producto.IDJuego==idproducto){                                        
                    producto.AgregadoAlCarrito = true;                    
                }
            })

            fs.writeFileSync(path.join(__dirname,'..','data','productsLista,json'),json.stringify(dbProduct,'utf8'))

            res.redirect('/productos/productosLista/' + idproducto)

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
            NombreDeProducto: req.body.nombreDelProducto.trim(),
            Precio:Number(req.body.precioProd),
            Tamaño: req.body.tamanioJue.trim(),
            Idioma: req.body.idiomaJuego.trim(),                    
            IdiomaSubt: req.body.subtitulo.trim(),     
            Categoria: req.body.categoriaJuego.trim(),                                    
            FechaLanzamiento: req.body.fechaLanzam,
            Descuento:  Number(req.body.descuento),
            Stock: Number(req.body.stock),    
            DescripcionCorta: req.body.detalle.trim(),
            Calificacion: "",
            OfertasUtimosJuegos: "",
            OfertasDeLaSemana: "",
            AgregadoAlCarrito: "",
            Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }

        dbProduct.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')
        
        res.redirect('/productos')
    },
    show:function(req,res){
        let idProducto = req.params.id;       

        let resultado = dbProduct.filter(producto =>{
            return producto.IDJuego == idProducto
        })
        res.render('productShow',{
            title: "Ver/Editar Producto",
            producto: resultado[0],            
        })
    },
    actualizar: function(req,res){
        let idproducto = req.params.id;

            dbProduct.forEach(producto=>{
                if(producto.IDJuego==idproducto){
                    producto.IDJuego = Number(idproducto);                    
                    producto.Codigo = Number(req.body.codigo);
                    producto.NombreDeProducto = req.body.nombreDelProducto.trim();
                    producto.Precio = Number(req.body.precioProd);                    
                    producto.Tamaño = req.body.tamanioJue.trim();
                    producto.Idioma = req.body.idiomaJuego.trim();                    
                    producto.IdiomaSubt = req.body.subtitulo.trim();     
                    producto.Categoria = req.body.categoriaJuego.trim();                                    
                    producto.FechaLanzamiento = req.body.fechaLanzam;
                    producto.Descuento = Number(req.body.descuento);
                    producto.Stock = Number(req.body.stock);    
                    producto.DescripcionCorta = req.body.DescripcionCorta.trim();
                    producto.Imagen= (req.files[0]?req.files
                        [0].filename:producto.Imagen);
                }
            })
            
            fs.writeFileSync(path.join(__dirname,"..",'data',"productsLista.json"),JSON.stringify(dbProduct),'utf-8')
            
            // res.redirect('/productos/')

    }
    
}