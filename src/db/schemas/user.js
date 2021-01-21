const { Schema, model } = require('mongoose')

const _delete = require('mongoose-delete')
const { autoIncrement } = require('mongoose-plugin-autoinc-fix')
const _passportLocalMongoose = require('passport-local-mongoose')

const characterSchema = require('./character').schema

const _schema = new Schema({
  signed_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },

  scadenza_tessera: {
    type: Date,
    default: Date.now,
  },

  email_verificata: {
    type: Boolean,
    default: false,
  },

  telefono: {
    type: String,
    default: null,
  },

  anagrafica: {
    nome: {
      type: String,
      required: true,
    },

    cognome: {
      type: String,
      required: true,
    },

    data_nascita: {
      type: Date,
      required: true,
    },

    residenza: {
      via: {
        type: String,
        required: true,
      },

      citta: {
        type: String,
        required: true,
      },

      provincia: {
        type: String,
        required: true,
        uppercase: true,
      },
    },

    codice_fiscale: {
      type: String,
      required: true,
      immutable: true,
      minlength: 16,
      maxlength: 16,
      uppercase: true,
      unique: true,
    },

    sesso: {
      type: String,
      required: true,
      enum: ['M', 'F', 'A', 'N'],
    },
  },

  giocatore: {
    pab_totali: {
      type: Number,
      default: 0,
      min: 0,
    },

    pab_spendibili: {
      type: Number,
      default: 0,
      min: 0,
    },

    personaggi: [characterSchema],
  },

  ruolo: [
    {
      type: String,
      default: null,
      enum: ['DIR', 'GA', 'REG', 'ADM'],
    },
  ],
})

_schema.plugin(_delete, { overrideMethods: 'all' })
_schema.plugin(autoIncrement, {
  model: 'User',
  field: 'n_tessera',
  startAt: 1,
  incrementBy: 1,
})
_schema.plugin(_passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  limitAttempts: true,
  maxAttempts: 10,
})

const _model = model('user', _schema)

module.exports = {
  model: _model,
  schema: _schema,
}
