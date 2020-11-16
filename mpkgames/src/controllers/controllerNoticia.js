const db = require('../database/models');

const {validationResult} = require('express-validator');

module.exports = {

    mostrarNoticias: function(req, res) {
        
        db.Noticia.findAll()
            .then(function(ListaDeNoticias){                
                res.render('noticiasMenuShow', {
                    title: "Noticias",
                    noticias: ListaDeNoticias,
                    user: req.session.user,               
                })
            })
    },


    mostrarFormNoticias:function(req,res){        
        res.render('noticiasFrom',{
            title:"Agregar Noticias",
            user: req.session.user,  
        })
    }, 

    agregarNoticia:function(req,res,next){

        let errors = validationResult(req);
        console.log("\n\n estoy dento de agregarNoticias")
        if(errors.isEmpty()){
            console.log("\n\n estoy dento de isEmpty")
            db.Noticia.create({          
                tituloArtNoticia: req.body.ArtNoti,  
                titulo: req.body.tituloNoti,
                subTitulo: req.body.subtitulo,
                contNoticia: req.body.contNoticia,                                
                Imagen: (req.files[0])?req.files[0].filename:"default-image.png",
            })
            .then(result => {
                // console.log(result)
                console.log("\n\n estoy dento de then")
                res.redirect('/noticias/noticiasMenuShow')
            })
            .catch(err => {
                console.log("\n\n estoy dento de catch")
                res.send(err)
            })
            }else{   
                console.log("\n\n estoy dento del else")  
                res.render("noticiasFrom",{
                    title:"Noticias con errores",                
                    errors:errors.mapped(), 
                    old:req.body,                               
                    user:req.session.user
                })
            } 
    },
    mostrarNoticiaPorId:function(req,res){
        let id = req.params.id;
        // let CategoriaDelJuego = "";

        db.Noticia.findByPk(id)
            .then(function(detailNoticia){                               
                res.render('noticiaShow',{
                    title:"Detail news",
                    noticia: detailNoticia,                           
                    user: req.session.user,   
                })
            })       
    },
    
}