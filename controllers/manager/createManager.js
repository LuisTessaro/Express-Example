const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const manager = req.body.manager
        await ManagerModel.create(manager)
        res.render('success')
    }
    catch (err) {
        throw err
    }
}

module.exports = root