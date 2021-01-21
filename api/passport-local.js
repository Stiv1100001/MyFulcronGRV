const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require('../src/db').schemas.User.model

const strategyOpts = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use(User.createStrategy())

passport.use(
  new Strategy(strategyOpts, function (payload, done) {
    User.findOne({ _id: payload.id }, function (err, user) {
      if (err) {
        console.log(err)
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      }
      return done(null, false)
    })
  })
)
