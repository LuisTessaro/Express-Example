// Express imports
const express = require('express'),
    router = express.Router()

// Models imports
const Example = require('../models/example')

// Routes in /example
router.get('/example', (req, res) => {
    Example.get()
        .then(resolve => {
            res.render('index', resolve);
        })
})

module.exports = router