// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const pokemonById = require('./getPokemonId')
const pokemonAll = require('./getAllPokemon')
const createPokemon = require('./createPokemon')
const deletePokemon = require('./deletePokemon')

router.get('/:name', pokemonById)
router.get('/', pokemonAll)
router.post('/', createPokemon)
router.delete('/:name', deletePokemon)

exports.router = router