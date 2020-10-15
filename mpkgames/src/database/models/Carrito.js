// const { sequelize, DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes) => {

    let alias = "Carrito";    

    let cols={
        idcarrito:{
            type: DataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        usuario_id: {
            type: DataTypes.INTEGER(11),   
             allowNull:false,         
        },
        juego_id: {
            type: DataTypes.INTEGER(11),   
            allowNull:false,         
        },                 
        precio:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            defaultValue:0,
        },              
        cantidad:{
            type:DataTypes.INTEGER(11), 
            allowNull:false,           
            defaultValue:1,
        },
        formaDePago:{
            type:DataTypes.STRING(30),            
        },
        estado:{
            type:DataTypes.STRING(30),            
        },
        fecha:{
            type:DataTypes.DATEONLY(),
        },
        
    }

    let config = {
        tableName : "carrito",
         timestamps: true,    
        //  underscored: true    
    }


    const Carrito = sequelize.define(alias,cols,config);
  
     
        Carrito.associate = function(models){
         
            Carrito.belongsTo(models.Producto,{
             as:"Producto",             
              foreignKey:"juego_id",                      
         })        
         Carrito.belongsTo(models.User,{
            as:"User",
            foreignKey:"usuario_id"
        })        
     }

    return Carrito;
}