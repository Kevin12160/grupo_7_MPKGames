// const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize,dataTypes) => {

    let alias = "User"

    let cols = {
        id : {
            type:dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre : {
            type:dataTypes.STRING(20),
            allowNull:false
        },
        apellido : {
            type:dataTypes.STRING(20),
            allowNull:false
        },
        usu_CodigoArea: {
            type:dataTypes.STRING(15)
        },
        usu_Telefono : {
            type:dataTypes.STRING(50)
        },
        email : {
            type:dataTypes.STRING(200),
            allowNull:false
        },
        contraseña : {
            type:dataTypes.STRING(256),
            allowNull:false
        },
        avatar : {
            type:dataTypes.STRING(200)
        },
        rol : {
            type:dataTypes.STRING(45),
            defaultValue: "user"
        }
    }

    let config = {
        tableName: "user", //nombre de la tabla
        timestamps:false,
        underscored: false //evita problemas
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.hasMany(models.Carrito,{
            as:"User_Carrito",
            foreignKey:"usuario_id"
        })

        User.belongsToMany(models.Producto,{
            as:"productos",
            through:"Carrito",            
            foreignKey:"usuario_id",
            otherKey: "juego_id",

        })

    }


    return User;
}