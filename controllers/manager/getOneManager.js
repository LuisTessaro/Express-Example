const ManagerModel = require('../../models/manager')

const root = async (req, res) => {
    try {
        const id = req.params.id
        const manager = await ManagerModel.get(id)
        if (manager === 'Not found')
            res.status(404).send('Client Not Found')
        else {
            const content = 'id ' + manager.id + ' name: ' + manager.name
            res.render('manager', { title: manager.id, message: content })
        }
    }
    catch (err) {
        throw res.status(500).send('Error')
    }
}

module.exports = root
