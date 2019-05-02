const DigimonModel = require('../../models/digimon')

//locahost:3000/digimon/
//method: get

const root = async (req, res) => {
  try {
    const digimon = await DigimonModel.getAll()
    const content = digimon.map(e => 'name: ' + e.name + ' powerlevel: ' + e.powerLevel)
    res.render('digimon', { title: 'Todos Digimons', message: content })
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Digimon Not Found')
  }
}

module.exports = root