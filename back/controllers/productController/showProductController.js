const productModel = require("../../models/productModel")

module.exports = async(req, res) =>{
   try{
      const products = await productModel.find().populate({path:'owner', select:{_id:0, name:1}})
      res.send({totalItem:products.length,  data: products})
   }catch(err){
      res.status(400).json({message:err.message})
   }
}