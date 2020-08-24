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
        let producto = dbProduct.filter(producto=>{
            return producto.IDJuego == id
        })
        // console.log(producto)
        res.render('productDetail',{
            title:"Detalle del Producto",
            producto:producto[0]
        })
    },
    agregar:function(req,res){
        let categoria;
        let sub;
        if(req.query.categoria){
            categoria = req.query.categoria;
            sub = req.query.sub
        }
        res.render('productAdd',{
            title:"Agregar Producto",
            // categorias:dbCategories,
            // categoria:categoria,
            sub:sub
        })
    },
    publicar:function(req,res,next){
        
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
            Tamaño:  req.body.tamanioJue.trim(),
            Idioma:  req.body.idiomaJuego.trim(),                    
            IdiomaSubt: req.body.subtitulo.trim(),     
            Categoria: req.body.categoriaJuego.trim(),                                    
            FechaLanzamiento: req.body.fechaLanzam,
            Descuento:  Number(req.body.descuento),
            Stock: Number(req.body.stock),    
            DescripcionCorta: req.body.detalle.trim(),
            Imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }

        dbProduct.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..",'data',"productsDataBase.json"),JSON.stringify(dbProduct),'utf-8')
        
        res.redirect('/products')
    },
    show:function(req,res){
        let idProducto = req.params.id;
       

        let resultado = dbProduct.filter(producto =>{
            return producto.IDJuego == idProducto
        })
        res.render('productShow',{
            title: "Ver/Editar Producto",
            producto: resultado[0],
            total: dbProduct.length,
            // categorias:dbCategories
            
        })
    },
    actualizar: function(req,res){
        let idproducto = req.params.id;

        //    res.send(idProducto) 

            dbProduct.forEach(producto=>{
                if(producto.IDJuego==idproducto){
                    producto.IDJuego = Number(req.body.id);                    
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
                    producto.DescripcionCorta = req.body.detalle.trim();
                    producto.Imagen= (req.files[0]?req.files
                        [0].filename:producto.Imagen);
                }
            })
            fs.writeFileSync(path.join(__dirname,'..','data','productoDataBase,json'),json.stringify(dbProduct,'utf8'))

            res.redirect('/prodcts/show/' + idproducto)

    }
}