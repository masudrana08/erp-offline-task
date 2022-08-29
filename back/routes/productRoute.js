const express = require('express')
const createProductController = require('../controllers/productController/createProductController')
const showProductController = require('../controllers/productController/showProductController')
const productRoute = express.Router()

productRoute.post('/create', createProductController)
productRoute.get('/show', showProductController)

module.exports = productRoute