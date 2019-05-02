const DigimonDAOmongo = require('./generic/mongoDAO')
const DigimonDAOsql = require('./generic/sqlDAO')

const dbName = 'popularMonsters'
const tableName = 'digimon'

exports.read = async name => {
    try {
        const resp = await DigimonDAOmongo.readOneByParameter({ name: name }, dbName, tableName)
        return resp[0]
    }
    catch (err) {
        return err
    }
    // return new Promise((resolve, reject) => {
    //     DigimonDAOmongo.readOneByParameter({ name: name }, dbName, tableName)
    //         .then((resp) => {
    //             if (resp[0]) resolve(resp[0])
    //             else reject('no item by that id')
    //         })
    // })
}

exports.create = async digimon => {
    try {
        return await DigimonDAOmongo.create(digimon, dbName, tableName)
    }
    catch (err) {
        return err
    }
}

exports.delete = async name => {
    try {
        return await DigimonDAOmongo.deleteByParameter({ name: name }, dbName, tableName)
    }
    catch (err) {
        return err
    }
}

exports.readAll = async () => {
    try {
        return await DigimonDAOmongo.readTable(dbName, tableName)
    }
    catch (err) {
        return err
    }
}