// Express imports
const express = require('express'),
    router = express.Router()

// Middleware Imports
const logMiddleware = require('../middlewares/logger').myLogger

// Models imports
const Example = require('../models/example')

// Routes in /example
router.get('/example', logMiddleware, (req, res) => {
    Example.get()
        .then(resolve => {
            res.render('example', resolve);
        })
})

module.exports = router