// Express imports
const express = require('express'),
    router = express.Router()

const client = require('./client/clientHandler')
const manager = require('./manager/managerHandler')

// Middlewares for entire routes
const logMiddleware = require('../middlewares/logger')

// Routes in use
router.use('/client', logMiddleware, client)
router.use('/manager', logMiddleware, manager)

// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router