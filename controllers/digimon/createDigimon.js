const DigimonModel = require('../../models/digimon')

//locahost:3000/digimon 
//method: post
//body: {
// "digimon" : {
// 		"name" : "Luis",
// 		"powerLevel" : "SS"
// 	}
//}

const root = async (req, res) => {
  try {
    const digimon = req.body.digimon
    await DigimonModel.create(digimon)
    res.render('success')
  }
  catch (err) {
    console.log(err)
    res.status(404).send('Not Found')
  }
}

module.exports = root