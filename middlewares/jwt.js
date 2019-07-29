const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const accessToken = req.headers['x-access-token']
    if (!accessToken) return res.status(400).send('Please provide a x-access-token')
    jwt.verify(accessToken, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(400).send('Please provide a valid token')
        next()
    })
}
