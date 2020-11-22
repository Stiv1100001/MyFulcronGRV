const Router = require('express').Router

const User = require('../../src/db').schemas.User.model

const router = new Router()

router.get('/users', function (req, res) {
  User.find({}, (err, docs) => {
    if (err) {
      res.status(500).json(err).end()
      return
    }

    res.json(docs)
  })
})

module.exports = router
