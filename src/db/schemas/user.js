const { Schema, model } = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')
const _delete = require('mongoose-delete')
const { hashSync } = require('bcrypt')

const characterSchema = require('./character').schema
const IncrementalData = require('./incrementalData')

const _schema = new Schema(
  {
    signed_at: {
      type: Date,
      default: Date.now,
      immutable: true,
    },

    n_tessera: {
      type: Number,
      get(v) {
        v = v.toString()
        while (v.length < 8) v = '0' + v
        return v
      },
    },

    scadenza_tessera: {
      type: Date,
      default: Date.now,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    email_verificata: {
      type: Boolean,
      default: false,
    },

    telefono: {
      type: String,
      default: null,
    },

    password: {
      type: String,
      required: true,
      set: (v) => hashSync(v, 10),
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
  },
  { toJSON: { virtual: true } }
)

_schema.virtual('isAdmin').get(() => {
  return this.ruolo.length > 0
})

_schema.pre('save', (next) => {
  let doc = this

  IncrementalData.findByIdAndUpdate(
    { _id: 'tessera' },
    { $inc: { seq: 1 } },
    (error, tessera) => {
      if (error) return next(error)
      else if (!tessera) {
        tessera = new IncrementalData({ _id: 'tessera' }, { $inc: { seq: 1 } })
        tessera.save(() => {
          doc.tessera = tessera.seq
          next()
        })
      } else {
        doc.tessera = tessera.seq
        next()
      }
    }
  )
})

_schema.plugin(uniqueValidator, { message: '{PATH} già esistente! ({VALUE})' })
_schema.plugin(_delete)

const _model = model('user', _schema)

export default _model

module.exports = {
  model: _model,
  schema: _schema,
}
