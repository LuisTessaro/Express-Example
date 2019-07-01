const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const id = req.params.id
        const manager = await ManagerModel.get(id)
        if (manager) {
            const content = 'id ' + manager._id + ' name: ' + manager.name
            res.status(200).render('manager', { title: manager._id, message: content })
        }
        else {
            res.status(404).send('Client Not Found')
        }
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root
