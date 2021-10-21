const Sequelize = require("sequelize")
//Objeto de Conexion
const sequelize= new Sequelize('amixes_poderosos','user1','root',{
    dialect: 'mysql',
    host: '54.227.9.233', //Direccion IP
    define:{
        //No coloques createdAt y updateAt
        timestamps:false,
        //Evitar plural
        freezeTableName: true
    }
})

const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/cartas'),
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize;