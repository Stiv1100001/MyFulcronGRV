const mongoose = require('mongoose')
const db = mongoose.connection

module.exports = function () {
  if (db.readyState === 0) {
    db.on('error', console.error.bind(console, 'Errore di connessione:'))
    db.once('open', () => console.info('DB connesso correttamente'))

    let connectionUrl

    if (process.env.NODE_ENV === 'production')
      connectionUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    else
      connectionUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_IP_DEV}:${process.env.DB_PORT}/${process.env.DB_NAME}`

    mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      authSource: process.env.DB_AUTH,
    })
  }
}
