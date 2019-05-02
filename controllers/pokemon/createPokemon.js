const PokemonModel = require('../../models/pokemon')

//locahost:3000/pokemon 
//method: post
//body: {
// "pokemon" : {
// 		"name" : "Luis",
// 		"powerLevel" : "SS"
// 	}
//}

const root = async (req, res) => {
  try {
    const pokemon = req.body.pokemon
    await PokemonModel.create(pokemon)
    res.render('success')
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Not Found')
  }
}

module.exports = root