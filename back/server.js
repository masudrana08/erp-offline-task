const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authRoute = require('./routes/authRoute')
const authChecker = require('./middleware/authChecker')
const productRoute = require('./routes/productRoute')
const sellsRoute = require('./routes/sellsRoute')
const customersRoute = require('./routes/customersRoute')
const PORT = 9999

app.use(cors())
app.use(express.json())
app.use(authChecker)

app.use('/auth', authRoute)
app.use('/products', productRoute)
app.use('/sells', sellsRoute)
app.use('/customers', customersRoute)

mongoose.connect('mongodb://localhost:27017/erp', ()=>{
   console.log('Database Connected');
})

app.listen(PORT, ()=>{
   console.log('Server is running with port ', PORT);
})