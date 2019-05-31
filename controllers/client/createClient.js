const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const client = req.body.client
        await ClientModel.create(client)
        res.render('success')
    }
    catch (err) {
        throw err
    }
}

module.exports = root