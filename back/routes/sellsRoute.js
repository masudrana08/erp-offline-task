const express = require('express')
const sellCreateController = require('../controllers/sellsController/sellCreateController')
const showSellsController = require('../controllers/sellsController/showSellsController')
const sellsRoute = express.Router()

sellsRoute.post('/create', sellCreateController)
sellsRoute.get('/show', showSellsController)

module.exports = sellsRoute