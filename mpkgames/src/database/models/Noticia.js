module.exports= (sequelize, DataTypes) => {

    let alias = "Noticia";  

    let cols={

        id_noticias:{
            type: DataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        tituloArtNoticia:{
            type:DataTypes.STRING(60),
            allowNull:false
        },
        titulo:{
            type:DataTypes.STRING(155),
            allowNull:false
        },
        subTitulo:{
            type:DataTypes.STRING(180),
            allowNull:false
        },
        contNoticia:{
            type:DataTypes.TEXT  ,
            allowNull:false
        },
        Imagen:{
            type:DataTypes.STRING(200),            
        }
    }
    
    
    let config = {
        tableName : "noticias",
         timestamps: true,    
    }

    const Noticia = sequelize.define(alias,cols,config);
    return Noticia;
}