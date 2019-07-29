const Manager = require('../../models/mongoose-models/Manager')

const root = async (req, res) => {
    try {
        const { id } = req.params
        const manager = req.body
        await Manager.findByIdAndUpdate(id, {
            $set: manager
        }, { new: true })
        return await res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports = root