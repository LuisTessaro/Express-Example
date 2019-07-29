// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const getManager = require('./getManager')
const createManager = require('./createManager')
const updateManager = require('./updateManager')
const deleteManager = require('./deleteManager')

router.get('/:id', getManager.getById)
router.delete('/:id', deleteManager)
router.get('/', getManager.getAll)
router.post('/', createManager)
router.put('/:id', updateManager)

module.exports = router
