const express = require('express')
const customerModel = require('../models/customerModel')
const customersRoute = express.Router()

customersRoute.get('/', async (req, res)=>{
   const customers = await customerModel.find()
   res.send({data: customers})
})

module.exports = customersRoute