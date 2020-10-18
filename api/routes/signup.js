const user = require('../../src/db/schemas/user')

const Router = require('express').Router
const User = require('./../../src/db/schemas/user')._model

const router = new Router()

router.post('/signup', async (req, res) => {
  let userData = req.body

  if (Object.keys(userData).length === 0 && userData.constructor === Object) {
    res.json({ msg: '', error: 'Empty data' })
    return
  }

  let newUser = {
    n_tessera: '00000010',
    email: userData.email,
    telefono: userData.telefono,
    password: userData.password,
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
  }

  try {
    await new User(newUser).save()

    console.log('New user subscribed')

    res.json({ msg: 'OK', error: null })
  } catch (e) {
    console.error(e.message)
    res.json({
      msg: '',
      error: e.message,
    })
  }
})

module.exports = router
