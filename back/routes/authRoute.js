const express = require('express')
const signinController = require('../controllers/authController/signinController')
const signupController = require('../controllers/authController/signupController')
const authRoute = express.Router()

authRoute.post('/signup', signupController)
authRoute.post('/signin', signinController)

module.exports = authRoute