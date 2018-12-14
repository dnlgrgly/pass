const articleModel = require('../../../models/article')

module.exports = async function getById (req, res) {
  res.send(await articleModel.get(req.params.id))
}
