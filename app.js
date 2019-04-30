const express = require('express'),
    app = express()
const port = process.argv[2] || 3000
const bodyParser = require('body-parser')


app.set('view engine', 'pug')

app.use(express.static('./public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./controllers'))
app.get('*', function (req, res) {
    res.send('no route implemented there yet', 404)
})


app.listen(port, () => {
    console.log('Listening on port ' + port + '!')
})