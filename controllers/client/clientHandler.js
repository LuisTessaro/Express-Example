// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getClient = require('./getOneClient')
const createClient = require('./createClient')
const updateClient = require('./updateClient')

router.get('/:id', getClient)
router.post('/', createPokemon)
router.put('/:id', deletePokemon)

exports.router = router
