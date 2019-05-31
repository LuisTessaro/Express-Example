const ClientModel = require('../../models/client')

const root = async (req, res) => {
    try {
        const id = req.params.id
        const client = await ClientModel.get(id)
        if (client === 'Not found')
            res.status(404).send('Client Not Found')
        else {
            const content = 'id ' + client.id + ' name: ' + client.name
            res.render('client', { title: client.id, message: content })
        }
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root
