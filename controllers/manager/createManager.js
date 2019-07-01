const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const manager = req.body.manager
        await ManagerModel.create(manager)
        res.status(201).send('success')
    }
    catch (err) {
        throw err
    }
}

module.exports = root