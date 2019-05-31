// Express imports
const express = require('express'),
    router = express.Router()

const pokemon = require('./pokemon/pokemonHandler')
const digimon = require('./digimon/digimonHandler')

// Middlewares
const logMiddleware = require('../middlewares/logger')
const digimonMiddleware = require('../middlewares/digimonReqAuth')
const pokemonMiddleware = require('../middlewares/pokemonReqAuth')

// Routes in use
router.use('/digimon', logMiddleware, digimonMiddleware, digimon.router)
router.use('/pokemon', logMiddleware, pokemonMiddleware, pokemon.router)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router