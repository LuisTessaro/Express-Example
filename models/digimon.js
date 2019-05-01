// As models handle db functions import them here
const db = {
    1: {
        title: "Patamon",
        message: "patamon é um digimon maneiro"
    },
    2: {
        title: "Patamon2",
        message: "patamon é um digimon maneiro2"
    },
    3: {
        title: "Patamon3",
        message: "patamon é um digimon maneiro3"
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
            title: 'all digimons',
            message: JSON.stringify(db, null, 2)
        })
    else
        return Promise.reject('não existe, otário')
}