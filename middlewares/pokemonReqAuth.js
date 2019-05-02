module.exports = (req, res, next) => {
    if (req.body.pokemon === undefined)
        res.status(400).send('Bad Request')
    else
        next();
}