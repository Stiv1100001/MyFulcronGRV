const { Schema, model } = require('mongoose')
const _delete = require('mongoose-delete')

const cardSchema = require('./cards').schema

const _schema = new Schema({
  nome: {
    type: String,
    required: true,
  },

  razza: {
    type: String,
    required: true,
    enum: ['Umano', 'Elfo', 'Nano', 'Mauth'],
  },

  pab_spesi: {
    type: Number,
    default: 0,
    min: 0,
  },

  background: String,

  obiettivi: [String],

  attivo: {
    type: Boolean,
    default: 0,
  },

  /*abilita: {
      type: Types.ObjectId,
      ref: 'Abilita',
    },*/

  cartellini: [cardSchema],
})

_schema.plugin(_delete)

const _model = model('character', _schema)

module.exports = {
  schema: _schema,
  model: _model,
}
