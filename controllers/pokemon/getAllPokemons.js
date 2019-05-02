const PokemonModel = require('../../models/pokemon')

const root = async (req, res) => {
  try {
    const pokemon = await PokemonModel.getAll()
    res.render('pokemon', pokemon)
  }
  catch (err) {
    console.log(err)
    res.status(404).send('pokemon Not Found')
  }
}

module.exports = root