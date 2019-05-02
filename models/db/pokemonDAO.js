const PokemonDAOmongo = require('./generic/mongoDAO')
const PokemonDAOsql = require('./generic/sqlDAO')

const dbName = 'popularMonsters'
const tableName = 'pokemon'

exports.read = async name => {
    try {
        const resp = await PokemonDAOmongo.readOneByParameter({ name: name }, dbName, tableName)
        return resp[0]
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

exports.delete = async name => {
    try {
        return await PokemonDAOmongo.deleteByParameter({ name: name }, dbName, tableName)
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