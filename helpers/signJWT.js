const jwt = require('jsonwebtoken')

module.exports = (data, expires) => {
    return jwt.sign(data, process.env.SECRET, { expiresIn: expires })
}
