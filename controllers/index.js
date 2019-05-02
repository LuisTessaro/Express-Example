// Express imports
const express = require('express'),
    router = express.Router()

const pokemon = require('./pokemon/pokemonHandler')
const digimon = require('./digimon/digimonHandler')

const logMiddleware = require('../middlewares/logger').myLogger

// Models imports if needed
// something something = require something
// const Example = require('../models/example')
// Routes in use

// router.use('/pokemon', logMiddleware, pokemon.router)
router.use('/digimon', logMiddleware, digimon.router)
router.use('/pokemon', logMiddleware, pokemon.router)

// router.use('/', require('./example2'))

module.exports = router