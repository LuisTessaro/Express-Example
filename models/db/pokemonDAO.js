const PokemonDAOmongo = require('./generic/mongoDAO')
const PokemonDAOsql = require('./generic/sqlDAO')

const dbName = 'popularMonsters'
const tableName = 'pokemon'

exports.read = async id => {
    try {
        return await PokemonDAOmongo.readOneByParameter({ pokemonId: id }, dbName, tableName)[0]
    }
    catch (err) {
        return err
    }
}

exports.create = async pokemon => {
    try {
        return await PokemonDAOmongo.create(pokemon, dbName, tableName)
    }
    catch (err) {
        return err
    }
}

exports.delete = async id => {
    try {
        return await PokemonDAOmongo.deleteByParameter({ pokemonId: id }, dbName, tableName)
    }
    catch (err) {
        return err
    }
}

exports.readAll = async () => {
    try {
        return await PokemonDAOmongo.readTable(dbName, tableName)
    }
    catch (err) {
        return err
    }
}