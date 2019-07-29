// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getClient = require('./getClient')
const createClient = require('./createClient')
const updateClient = require('./updateClient')
const deleteClient = require('./deleteClient')

router.get('/:id', getClient.getById)
router.delete('/:id', deleteClient)
router.get('/', getClient.getAll)
router.post('/', createClient)
router.put('/:id', updateClient)

module.exports = router
