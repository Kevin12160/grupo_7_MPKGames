
function UsuAministradorMiddleware(req,res,next){
    
    if(req.session.user.TipoUsuario=="Administrador"){
        next()
    }else{            
         res.redirect('/productos')
    }


    
}

module.exports = UsuAministradorMiddleware 
