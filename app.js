var express = require('express'),
    app = express()

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))
app.use(require('./middlewares/users'))
app.use(require('./controllers'))

app.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})