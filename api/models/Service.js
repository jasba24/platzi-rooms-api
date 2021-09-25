const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
  name: String,
  slug: String,
})

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Service = model('Service', serviceSchema)

module.exports = Service
