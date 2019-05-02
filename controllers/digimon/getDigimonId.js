const DigimonModel = require('../../models/digimon')

//locahost:3000/digimon/id
//method: get

const root = async (req, res) => {
  try {
    const name = req.params.name
    const digimon = await DigimonModel.get(name)
    const content = 'Name ' + digimon.name + ' powerlevel: ' + digimon.powerLevel
    res.render('digimon', { title: digimon.name, message: content })
  }
  catch (err) {
    console.log(err)
    res.status(404).send('digimon Not Found')
  }
}

module.exports = root