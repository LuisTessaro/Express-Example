var db = require('../db')

exports.create = (user, text, cb) => {
    var comment = {
        user: user,
        text: text,
        date: new Date().toString()
    }
    db.save(comment, cb)
}

exports.get = (id, cb) => {
    db.fetch({ id: id }, (err, docs) => {
        if (err) return cb(err)
        cb(null, docs[0])
    })
}

exports.all = (cb) => {
    db.fetch({}, cb)
}

exports.allByUser = (user, cb) => {
    db.fetch({ user: user }, cb)
}