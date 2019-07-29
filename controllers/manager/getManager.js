const Manager = require('../../models/mongoose-models/Manager')

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const manager = await Manager.findById(id)
        if (Manager) {
            res.status(200).send(manager)
        }
        else {
            res.status(404).send('Manager Not Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

const getAll = async (req, res) => {
    try {
        const managers = await Manager.find({})
        if (managers.length > 0) {
            res.status(200).send(managers)
        }
        else {
            res.status(404).send('No Managers Found')
        }
    }
    catch (err) {
        return res.status(500).send('Error')
    }
}

module.exports.getById = getById
module.exports.getAll = getAll
