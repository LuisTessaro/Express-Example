// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getManager = require('./getOneManager')
const createManager = require('./createManager')
const updateManager = require('./updateManager')

router.get('/:id', getManager)
router.post('/', createManager)
router.put('/:id', updateManager)

exports.router = router
