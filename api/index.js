const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const passport = require('passport')

const { adminMiddleware } = require('./customMiddlewares')
const db = require('./../src/db')

try {
  // Create express instance
  const app = express()

  // Set params
  app.set('trust proxy', true) // * read client ip from left X-Forwarded-* (Nginx proxy)

  // Initiliaze Passport.js strategies
  require('./passport-local')

  // Add middlewares
  app.use(passport.initialize()) // * Add Passport.js instance for authenticated route
  app.use(bodyParser.urlencoded({ extended: true })) // * Parse form-urlencoded to JSON
  app.use(bodyParser.json()) // * Parse application/json to JSON
  app.use(cookieParser()) // * Parse cookie to JSON
  app.use(
    morgan(
      '[ from :remote-addr at :date[clf] ]\t:http-version :method \tto :url\t status::status - took :response-time ms'
    )
  ) // * Log every request to API

  // Require API routes
  const auth = require('./routes/auth')
  const admin = require('./routes/admin')

  // Import API Routes
  app.use('/auth', auth)
  app.use(
    '/admin',
    passport.authenticate('jwt', { session: false }),
    adminMiddleware, // * check if is an admin
    admin
  )

  // Connect app to DB instance
  db.connect()

  // Export express app
  module.exports = app

  // Start standalone server if directly running
  if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  }
} catch (e) {
  console.error(e)
}
