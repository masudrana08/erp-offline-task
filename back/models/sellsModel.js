const {Schema, model, default: mongoose} = require('mongoose')

const sellsSchema = new Schema({
   productId: String,
   productName: String,
   productPrice: Number,
   totalItem: Number,
   buyer: String,
}, {timestamps:true})

const sellsModel = model('Sell', sellsSchema)

module.exports = sellsModel
