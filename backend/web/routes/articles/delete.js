const articleModel = require('../../../models/article')

module.exports = async function getById (req, res) {
  await articleModel.deleteById(req.body.id)
  res.send('Success!')
}
