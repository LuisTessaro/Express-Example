// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getClient = require('./getOneClient')
const createClient = require('./createClient')
const updateClient = require('./updateClient')

router.get('/:id', getClient)
router.post('/', createClient)
router.put('/:id', updateClient)

exports.router = router
