const userModel = require('../../../models/user')

module.exports = async function all (req, res) {
  res.send(await userModel.all())
}