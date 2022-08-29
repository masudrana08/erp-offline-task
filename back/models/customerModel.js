const {Schema, model} = require('mongoose')

const customerSchema = new Schema({
   name : {
      type: String,
   },
   phone : {
      type: String,
      required: true,
      unique: true
   },
   password : {
      type: String,
      required: true
   },
})

const customerModel = model('Customer', customerSchema)

module.exports = customerModel
