const PokemonModel = require('../../models/pokemon')

const root = async (req, res) => {
  try {
    const pokemonId = req.params.id 
    const digimon = await PokemonModel.get(pokemonId)
    res.render('pokemon', digimon)
  }
  catch (err) {
    console.log(err)
    res.status(404).send('pokemon Not Found')
  }
}

module.exports = root