const dbUsers = require('../data/dataUsers');

//si existe la cookie entonces...
module.exports = function(req,res,next){
    if(req.cookies.userMPKGames){
        req.session.user = req.cookies.userMPKGames;
        next()
    }else{
        next()
    }
}