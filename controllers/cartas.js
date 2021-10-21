const path = require('path')

const Carta = require('../utils/database').models.carta

exports.postAgregarCarta = (req, res)=>{
    carta.log(req.body)
    Carta.create(req.body)
    .then(result=>{
        console.log("Carta creada exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })    
}

exports.getObtenerCartas = (req, res)=>{
    Carta.findAll()
        .then(vjs=>{
            console.log(vjs)
            res.json(vjs)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}