const articleModel = require('../../../models/article')

module.exports = async function update (req, res) {
  res.send(await articleModel.update(req.body.id, req.body))
}
