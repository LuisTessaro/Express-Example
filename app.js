const config = require('./config/config')
const port = process.argv[2] || 3000
const app = config.setUpServer()

app.listen(port, () => {
    console.log('Listening on port ' + port + '!')
})