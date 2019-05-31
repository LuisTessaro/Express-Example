// As models handle db functions import them here
const ClientDAO = require('./db/ClientDAO')
// Methods
exports.get = (id) => {
    return ClientDAO.read(id)
}

exports.getAll = () => {
    return ClientDAO.readAll()
}

exports.create = (client) => {
    return ClientDAO.create(client)
}

exports.update = (id, client) => {
    return ClientDAO.update(id, client)
}

exports.delete = (id) => {
    return ClientDAO.delete(id)
}