const PokemonModel = require('../../models/pokemon')

//locahost:3000/pokemon/id
//method: get

const root = async (req, res) => {
  try {
    const name = req.params.name
    const pokemon = await PokemonModel.get(name)
    console.log(pokemon)
    const content = 'Name ' + pokemon.name + ' powerlevel: ' + pokemon.powerLevel
    res.render('pokemon', { title: pokemon.name, message: content })
  }
  catch (err) {
    console.log(err)
    res.status(404).send('pokemon Not Found')
  }
}

module.exports = root