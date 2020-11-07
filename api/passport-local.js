const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require('../src/db').schemas.User.model

const strategyOpts = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.debug(err)
          return done(err)
        }
        if (!user) {
          console.debug('No user')
          return done(null, false, { error: 'Email non valida' })
        }
        if (!user.checkPassword(password)) {
          console.debug('Wrong password')
          return done(null, false, { error: 'Password errata' })
        }

        let info = {}

        if (user.isAdmin) {
          info.scope = 'admin'
        } else {
          info.scope = '*'
        }

        done(null, user, info)
      })
    }
  )
)

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
