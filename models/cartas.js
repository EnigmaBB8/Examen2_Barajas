const Sequelize = require("sequelize")

const Carta = (sequelize)=>{
    sequelize.define('carta',{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        numeracion:{
            type:Sequelize.STRING(10),
            allowNull:false
        },
        color:{
            type:Sequelize.STRING(10),
            allowNull:false
        },
        palo:{
            type:Sequelize.STRING(10),
            allowNull:false
        }
    })
}

module.exports = Carta