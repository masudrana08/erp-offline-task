const jwt = require('jsonwebtoken')
require('dotenv').config()

const authChecker = (req,res, next)=>{
  console.log(new Date().toISOString());
  const token = req.headers.token
  if(token){
      const decoded = jwt.verify(token, process.env.JWT_PRIVATE)
      req.customer = decoded
  }
  next()
}

module.exports = authChecker