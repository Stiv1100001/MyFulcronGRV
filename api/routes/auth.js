const Router = require('express').Router
const jwt = require('jsonwebtoken')

const passport = require('passport')
const User = require('../../src/db').schemas.User.model

const router = new Router()

router.post('/signup', (req, res) => {
  let userData = req.body

  let newUser = new User({
    email: userData.email,
    telefono: userData.telefono,
    anagrafica: {
      nome: userData.anagrafica.nome,
      cognome: userData.anagrafica.cognome,
      data_nascita: userData.anagrafica.data_nascita,
      codice_fiscale: userData.anagrafica.codice_fiscale,
      sesso: userData.anagrafica.sesso,
      residenza: {
        via: userData.anagrafica.residenza.via,
        citta: userData.anagrafica.residenza.citta,
        provincia: userData.anagrafica.residenza.provincia,
      },
    },
  })

  User.register(newUser, userData.password, (err, user) => {
    if (err) {
      console.error(err)
      res.json({ status: 'failed', error: err })
    } else {
      if (!user) res.json({ status: 'failed', error: 'Failed fetching user' })
      else res.json({ status: 'success' })
    }
  })
})

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET)
    return res.json({ token })
  }
)

router.get(
  '/user',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { _id } = req.user
    User.findOne({ _id })
      .select('-password')
      .exec((err, user) => {
        if (err) res.status(500).send(err)
        else if (user) res.json({ user })
        else res.status(500).send('Token non valido')
      })
  }
)

module.exports = router
