// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const pokemonById = require('./getPokemonId')
const pokemonAll = require('./getAllPokemons')

router.get('/:id', pokemonById)
router.get('/', pokemonAll)

exports.router = router