
function UsuAministradorMiddleware(req,res,next){
    
    if(req.session.user.rol=="Administrador"){
        next()
    }else{            
         res.redirect('/productos')
    }


    
}

module.exports = UsuAministradorMiddleware 
