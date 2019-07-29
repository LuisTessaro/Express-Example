const Manager = require('../../models/mongoose-models/Manager')

const createManager = async (req, res) => {
    try {
        await Manager.findByIdAndDelete(req.params.id)
        res.status(200).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
}

module.exports = createManager