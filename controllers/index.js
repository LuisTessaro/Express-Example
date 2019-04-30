// Express imports
const express = require('express'),
    router = express.Router()

// Models imports if needed
// something something = require something
// const Example = require('../models/example')


// Routes in use
router.use('/', require('./example'))
router.use('/', require('./example2'))

module.exports = router