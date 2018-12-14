const userModel = require('../../../models/user')

module.exports = async function getById (req, res) {
  res.send(await userModel.deleteById(req.body.id))
}
