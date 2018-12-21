const passport = require('passport')
const { Router } = require('express')
const { catchAsyncErrors } = require('../utils')
const users = require('./users')

const publicRouter = new Router()
// use the private router for protected endpoints
const privateRouter = new Router()
privateRouter.use(passport.authenticate('jwt', { session: false }))

// user-related endpoints
publicRouter.post('/register', catchAsyncErrors(users.register))
publicRouter.post('/login', catchAsyncErrors(users.login))
publicRouter.get('/users', catchAsyncErrors(users.all))
publicRouter.get('/users/me', catchAsyncErrors(users.me))
publicRouter.delete('/user/delete/:id', catchAsyncErrors(users.delete))

module.exports = {
  public: publicRouter,
  private: privateRouter
}
