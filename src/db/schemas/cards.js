const { Schema, model } = require('mongoose')
const _delete = require('mongoose-delete')

const _schema = new Schema({
  nome: {
    type: String,
    required: true,
  },

  descrizione: {
    type: String,
    default: null,
  },

  effetti: {
    type: String,
    default: null,
  },

  unico: {
    type: Boolean,
    default: false,
  },
})

_schema.plugin(_delete)

const _model = model('card', _schema)

module.exports = {
  _model,
  _schema,
}
