// As models handle db functions import them here
const db = {
    title: 'Title',
    message: 'Content Content Content Content Content Content Content Content Content Content !'
}

// Methods
exports.get = () => {
    return new Promise((resolve, reject) => {
        resolve(db)
    })
}