const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const id = req.params.id
        const client = await ClientModel.get(id)
        if (client) {
            const content = 'id ' + client._id + ' name: ' + client.name
            res.status(200).render('client', { title: client._id, message: content })
        }
        else {
            res.status(404).send('Client Not Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = root
