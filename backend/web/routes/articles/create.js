const articleModel = require('../../../models/article')

module.exports = async function create (req, res) {
  const article = await articleModel.create(req.body)
  res.send(article)
}
