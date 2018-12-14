const jwt = require('jsonwebtoken')
const userModel = require('../../../models/user')
const config = require('../../../config')

module.exports = async function register (req, res) {
  const user = await userModel.register(req.body)

  const token = jwt.sign({ id: user.id }, config.server.jwtSecret)
  res.send({ user, token })
}
