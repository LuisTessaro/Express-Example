// Simple middleware that loggs something
module.exports = (req, res, next) => {
    console.log(`${req.method} ON ${req.url}`)
    next()
}
