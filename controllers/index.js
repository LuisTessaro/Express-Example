// Express imports
const express = require('express'),
    router = express.Router()

const pokemon = require('./pokemon/pokemonHandler')
const digimon = require('./digimon/digimonHandler')

// Middlewares
const logMiddleware = require('../middlewares/logger')
const digimonMiddleware = require('../middlewares/digimonReqAuth')
const pokemonMiddleware = require('../middlewares/pokemonReqAuth')

// Models imports if needed
// something something = require something
// const Example = require('../models/example')

// Routes in use
router.use('/digimon', logMiddleware, digimonMiddleware, digimon.router)
router.use('/pokemon', logMiddleware, pokemonMiddleware, pokemon.router)

module.exports = router