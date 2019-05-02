module.exports = (req, res, next) => {
    if (req.body.digimon === undefined)
        res.status(400).send('Bad Request')
    else
        next();
}