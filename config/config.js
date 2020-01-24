const express = require('express')

module.exports.setUpServer = () => {
    const app = express()

    app.set('view engine', 'pug')

    app.use(express.static('../public'))

    app.use(express.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(require('../controllers'))

    return app
}
