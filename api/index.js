const express = require('express')
const bodyParser = require('body-parser')
const connectToDB = require('./../src/db/connectToDB')

try {
  // Create express instance
  const app = express()

  // Require API routes
  const signup = require('./routes/signup')

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Import API Routes
  app.use(signup)

  connectToDB()

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
