const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const { id, manager } = req.body
        await ManagerModel.update(id, manager)
        res.status(204).send('Success')
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root