// As models handle db functions import them here
const db = {
    1: {
        title: "Pikachu",
        message: "Pikachu é um pokemon maneiro"
    },
    2: {
        title: "Charmander",
        message: "Charmander é um pokemon maneiro2"
    },
    3: {
        title: "Lugia",
        message: "Lugia é um pokemon maneiro3"
    }
}

// Methods
exports.get = (id) => {
    if (db[id])
        return Promise.resolve(db[id])
    else
        return Promise.reject('não existe, otário')
}

exports.getAll = () => {
    if (db)
        return Promise.resolve({
            title: 'all pokemons',
            message: JSON.stringify(db, null, 2)
        })
    else
        return Promise.reject('não existe, otário')
}