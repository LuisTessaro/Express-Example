const PokemonModel = require('../../models/pokemon')

//locahost:3000/pokemon/id
//method: delete

const root = async (req, res) => {
  try {
    const name = req.params.name
    await PokemonModel.delete(name)
    res.render('success')
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Pokemon Not Found')
  }
}

module.exports = root