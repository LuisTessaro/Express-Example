// Express imports
const express = require('express'),
    router = express.Router()

// Models imports
const Example = require('../models/example2')

// Routes in /example
router.get('/example2', (req, res) => {
    Example.get()
        .then(resolve => {
            res.render('example2', resolve);
        })
})

module.exports = router