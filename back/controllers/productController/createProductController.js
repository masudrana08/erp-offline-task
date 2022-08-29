const productModel = require("../../models/productModel")

module.exports = async(req, res) =>{
   try{
      const owner = req.customer?.id
      const {name, mrp, unit, stock} = req.body
      const newProduct = new productModel({
         name,
         mrp,
         unit,
         stock,
         owner
      })
      await newProduct.save()
      res.send({message:'Product Created Successfully'})
   }catch(err){
      console.log(err);
      res.status(400).json({message:err.message})
   }
}