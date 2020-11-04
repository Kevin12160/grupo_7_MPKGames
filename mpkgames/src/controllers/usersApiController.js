const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");


module.exports = { //exporto un objeto literal con todos los metodos    
    allUsers: function(req, res) {
        db.User.findAll()
            .then(resultdo=>{                
                res.json(resultdo)                
            })
    },

    
}