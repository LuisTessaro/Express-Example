// As models handle db functions import them here
const db = {
    title: 'Title',
    message: 'Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 !'
}

// Methods
exports.get = () => {
    return new Promise((resolve, reject) => {
        resolve(db)
    })
}