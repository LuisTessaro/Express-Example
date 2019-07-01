// As models handle db functions import them here
const Manager = require('./db/mongoose-models/manager')
// Methods
exports.get = async (id) => {
    return await Manager.findById(id)
}

exports.getAll = async () => {
    return await Manager.find({})
}

exports.create = async (manager) => {
    const managerObj = new Manager(manager)
    return await managerObj.save()
}

exports.update = async (id, manager) => {
    return await Manager.findByIdAndUpdate(id, manager)
}

exports.delete = async (id) => {
    return await Manager.findByIdAndDelete(id)
}