const productModel = require("../../models/productModel");
const sellsModel = require("../../models/sellsModel");

module.exports = async (req, res) => {
  try {
    const {products} = req.body
    for (prod of products){
      const {productId, totalItem, buyer} = prod
      const product = await productModel.findOne({_id:prod.productId})
      const newSell = new sellsModel({
          productId,
          totalItem,
          productName: product.name,
          productPrice: product.mrp,
          buyer,
      })
      await newSell.save()
      if(product.stock >= totalItem){
        await newSell.save()
        product.stock -= totalItem
        await product.save()
      }else{
        throw new Error('Out of Stock')
      }
    }
    res.send({message:'Sells Created Successfully'})

    
  } catch (err) {
   res.status(400).json({message:err.message})
  }
};
