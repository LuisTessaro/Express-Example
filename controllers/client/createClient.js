const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const client = req.body.client
        await ClientModel.create(client)
        res.status(201).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = root