const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const { id, client } = req.body
        await ClientModel.update(id, client)
        res.status(204).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = root