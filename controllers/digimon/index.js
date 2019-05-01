// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const digimonById = require('./getDigimonId')
const digimonAll = require('./getAllDigimons')

router.get('/:id', digimonById)
router.get('/', digimonAll)

exports.router = router