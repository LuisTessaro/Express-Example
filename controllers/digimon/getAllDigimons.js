const DigimonModel = require('../../models/digimon')

const root = async (req, res) => {
  try {
    const digimon = await DigimonModel.getAll()
    res.render('digimon', digimon)
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Digimon Not Found')
  }
}

module.exports = root