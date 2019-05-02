const DigimonModel = require('../../models/digimon')

//locahost:3000/digimon/id
//method: delete

const root = async (req, res) => {
  try {
    const name = req.params.name
    await DigimonModel.delete(name)
    res.render('success')
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Digimon Not Found')
  }
}

module.exports = root