const Client = require('../../models/mongoose-models/Client')

const createClient = async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id)
        res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
}

module.exports = createClient