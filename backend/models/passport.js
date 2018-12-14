const passport = require('passport')
const passportJWT = require('passport-jwt')
const { ObjectId } = require('mongodb')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
const config = require('../config')
const userModel = require('./user')

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.server.jwtSecret
    },
    jwtStrategy
  )
)

function jwtStrategy (jwtPayload, cb) {
  return userModel.raw
    .findOne({ id: ObjectId(jwtPayload.id) })
    .then(user => cb(null, user))
    .catch(err => cb(err))
}
