const articleModel = require('../../../models/article')

module.exports = async function getAll (req, res) {
  res.send(await articleModel.all())
}
