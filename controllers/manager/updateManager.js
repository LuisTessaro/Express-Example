const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const { id, manager } = req.body.id
        await ManagerModel.update(id, manager)
        res.render('success')
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root