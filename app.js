require('dotenv').config()
require('./models/mongoose')

const config = require('./config/config')
const port = process.env.PORT || process.argv[2] || 3000
const app = config.setUpServer()

app.listen(port, () => {
    console.log('[INFO] Listening on port ' + port + '!')
})