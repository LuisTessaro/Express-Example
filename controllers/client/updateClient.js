const Client = require('../../models/mongoose-models/Client')

const root = async (req, res) => {
    try {
        const { id } = req.params
        const client = req.body
        await Client.findByIdAndUpdate(id, {
            $set: client
        }, { new: true })
        return await res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = root