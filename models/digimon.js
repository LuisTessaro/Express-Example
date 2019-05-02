// As models handle db functions import them here
const digimonDAO = require('./db/digimonDAO')
// Methods
exports.get = (name) => {
    return digimonDAO.read(name)
}

exports.getAll = () => {
    return digimonDAO.readAll()
}

exports.create = (digimon) => {
    return digimonDAO.create(digimon)
}

exports.delete = (name) => {
    return digimonDAO.delete(name)
}