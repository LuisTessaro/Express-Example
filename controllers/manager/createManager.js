const Manager = require('../../models/mongoose-models/Manager')

const createClient = async (req, res) => {
    try {
        const manager = new Manager(req.body)
        await manager.save()
        res.status(201).send('Success')
    }
    catch (err) {
        return res.status(500).send('Error' + err)
    }
}

module.exports = createClient