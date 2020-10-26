const { Schema, model } = require('mongoose')

const _schema = new Schema({
  _id: {
    type: String,
    required: true,
  },

  seq: {
    type: Number,
    default: 0,
  },
})

const _model = model('incrementalData', _schema)

export default _model

module.exports = {
  model: _model,
  schema: _schema,
}
