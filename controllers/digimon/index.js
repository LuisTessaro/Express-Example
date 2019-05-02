// Express imports
const express = require('express'),
    router = express.Router()

// Controller import
const digimonById = require('./getDigimonId')
const digimonAll = require('./getAllDigimons')
const createDigimon = require('./createDigimon')
const deleteDigimon = require('./deleteDigimon')

router.get('/:name', digimonById)
router.get('/', digimonAll)
router.post('/', createDigimon)
router.delete('/:name', deleteDigimon)

exports.router = router