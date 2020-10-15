//  const { sequelize, DataTypes } = require("sequelize");

module.exports= (sequelize, DataTypes) => {

    let alias = "Producto";    

    let cols={
        IdJuego:{
            type: DataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        Codigo:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        NombreDeProducto:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        Precio:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            defaultValue:0
        },
        Stock: {
            type: DataTypes.INTEGER(11),
            defaultValue: 1,
        },
        Tamanio:{
            type:DataTypes.STRING(45),            
        },
        Idioma:{
            type:DataTypes.STRING(45),            
        },
        IdiomaSubt:{
            type:DataTypes.STRING(45),            
        },
        Categoria:{
            type:DataTypes.STRING(45),            
        },
        FechaLanzamiento:{
            type:DataTypes.DATEONLY(),
        },
        DescripcionCorta:{
            type:DataTypes.STRING(150),            
        }, 
        Descuento:{
            type:DataTypes.INTEGER(11),
            allowNull:false
        },
        Calificacion:{
            type:DataTypes.INTEGER(11),            
        },
        OfertasUtimosJuegos:{
            type:DataTypes.STRING(5),            
        },
        OfertasDeLaSemana:{
            type:DataTypes.STRING(5),            
        },
        Imagen:{
            type:DataTypes.STRING(200),            
        },       
        
    }

    let config = {
        tableName : "productos",
         timestamps: true,    
        //  underscored: true    
    }


    const Producto = sequelize.define(alias,cols,config);
    
    Producto.associate = function(models){
        Producto.hasMany(models.Carrito,{
            as:"carrito",
            foreignKey:"juego_id",            
        })        
       
        Producto.belongsToMany(models.User,{
           as:"User",
           through:"Carrito",            
           foreignKey:"juego_id",
           otherKey: "usuario_id",
       })
       }  

    return Producto;
}