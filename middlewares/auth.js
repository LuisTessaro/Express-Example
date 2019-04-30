User = require('../models/user')

module.exports = function(req, res, next) {
    if (req.session && req.session.user) {
        User.get(req.session.user, function(err, user) {
            if (user) {
                req.user = user
            } else {
                delete req.user
                delete req.session.user
            }

            next()
        })
    } else {
        next()
    }
}