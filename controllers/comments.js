var express = require('express'),
    router = express.Router(),
    Comment = require('../models/comment'),
    auth = require('../middlewares/auth')

router.post('/', auth, (req, res) => {
    user = req.user.id
    text = req.body.text

    Comment.create(user, text, (err, comment) => {
        res.redirect('/')
    })
})

router.get('/:id', (req, res) => {
    Comment.get(req.params.id, (err, comment) => {
        res.render('comments/comment', { comment: comment })
    })
})

module.exports = router