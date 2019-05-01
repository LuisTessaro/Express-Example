const DigimonModel = require('../../models/digimon')

const root = async (req, res) => {
  try {
    const digimonId = req.params.id 
    const digimon = await DigimonModel.get(digimonId)
    res.render('digimon', digimon)
  }
  catch (err) {
    console.log(err)
    res.status(404).send('digimon Not Found')
  }
}

module.exports = root