// As models handle db functions import them here
const ManagerDAO = require('./db/ManagerDAO')
// Methods
exports.get = (id) => {
    return ManagerDAO.read(id)
}

exports.getAll = () => {
    return ManagerDAO.readAll()
}

exports.create = (manager) => {
    return ManagerDAO.create(manager)
}

exports.update = (id, manager) => {
    return ManagerDAO.update(id, manager)
}

exports.delete = (id) => {
    return ManagerDAO.delete(id)
}