const express = require('express')

//Mini aplicación de express
const router = express.Router()
const vjController = require('../controllers/cartas')

//Crea una carta CREATE
router.post('/agregarCarta',vjController.postAgregarCarta)

//Consulta de cartas READ
router.get('/obtenerCartas',vjController.getObtenerCartas)

module.exports = router