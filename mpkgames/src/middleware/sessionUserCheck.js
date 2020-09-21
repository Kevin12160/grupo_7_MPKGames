module.exports = function sessionUserCheck(req,res,next){
   //si inicio session entonces next sino ir al login , pero como uso tb el redirect lo envio al home
    if(req.session.user){        
        next()
    }else{         
        // res.redirect('/users/login')
        res.redirect('/')
    }


}