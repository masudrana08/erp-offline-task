const customerModel = require("../../models/customerModel")
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = async(req, res) =>{
   const {name, phone, password} = req.body
   const hashPassword = bcrypt.hashSync(password, salt);
   try{
      const newCustomer = new customerModel({
         name,
         phone,
         password : hashPassword
      })
      await newCustomer.save()
      res.send({message:'Customer Created Successfully'})
      // .then(result=>{
      //    res.send({message:'Customer Created Successfully'})
      // })
      // .catch(err=>{
      //    res.status(500).json({message:err.message})
      // })
   }catch(err){
      res.status(400).json({message:err.message})
   }
}