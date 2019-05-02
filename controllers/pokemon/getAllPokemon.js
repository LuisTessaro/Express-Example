const PokemonModel = require('../../models/pokemon')

//locahost:3000/pokemon/
//method: get

const root = async (req, res) => {
  try {
    const pokemon = await PokemonModel.getAll()
    const content = pokemon.map(e => 'name: ' + e.name + ' powerlevel: ' + e.powerLevel)
    res.render('pokemon', { title: 'Todos pokemons', message: content })
  }
  catch (err) {
    console.log(err)
    res.status(404).send('pokemon Not Found')
  }
}

module.exports = root