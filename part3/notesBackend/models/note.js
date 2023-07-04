const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
require('dotenv').config()

const password = process.env.PASSWORD;
const url =
    `mongodb+srv://ps101:${password}@cluster0.priwnlz.mongodb.net/noteApp?retryWrites=true&w=majority`

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
      console.log('connected to MongoDB')
      console.log(result)
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)