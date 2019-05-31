// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getClient = require('./getOneClient')

router.get('/:id', getClient)
router.post('/', createPokemon)
router.delete('/:name', deletePokemon)

exports.router = router
