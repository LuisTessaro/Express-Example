// As models handle db functions import them here
const pokemonDAO = require('./db/pokemonDAO')
// Methods
exports.get = (id) => {
    return pokemonDAO.read(id)
}

exports.getAll = () => {
    return pokemonDAO.readAll()
}

exports.create = (pokemon) => {
    return pokemonDAO.create(pokemon)
}

exports.delete = (id) => {
    return pokemonDAO.delete(id)
}