require('dotenv').config()
const customerModel = require("../../models/customerModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports = async(req, res) =>{
   const {phone, password} = req.body
   
   try{
      const customer = await customerModel.findOne({phone})
      const isMatchPassword = bcrypt.compareSync(password, customer.password);
      if(isMatchPassword){
         const {_id, name, phone} = customer
         const KEY = process.env.JWT_PRIVATE
         const token = jwt.sign({ id:_id,  name, phone}, KEY)
         res.send({
            message:'Successfully Logged In',
            data: token
        })
     }else{
      throw new Error('Authentication Failed')
     }
      
   }catch(err){
      res.status(400).json({message:err.message})
   }
}



