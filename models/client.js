// As models handle db functions import them here
const Client = require('./db/mongoose-models/client')
// Methods
exports.get = async (id) => {
    return await Client.findById(id)
}

exports.getAll = async () => {
    return await Client.find({})
}

exports.create = async (client) => {
    const clientObj = new Client(client)
    return await clientObj.save()
}

exports.update = async (id, client) => {
    return await Client.findByIdAndUpdate(id, client)
}

exports.delete = async (id) => {
    return await Client.findByIdAndDelete(id)
}