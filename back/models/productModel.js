const {Schema, model, default: mongoose} = require('mongoose')

const productSchema = new Schema({
   name: String,
   mrp: Number,
   unit: Number,
   stock: Number,
   owner: {
      type: Schema.Types.ObjectId,
      ref:'Customer'
   }
}, {timestamps:true})

const productModel = model('Product', productSchema)

module.exports = productModel
