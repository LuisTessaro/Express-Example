const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const { id, client } = req.body.id
        await ClientModel.update(id, client)
        res.render('success')
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root