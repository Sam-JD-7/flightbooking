const express = require('express')
adminRouter = express.Router()
controller = require('../controller/adminController')
adminRouter.post('/login',controller.login)
adminRouter.post('/addflight',controller.addFlight)
adminRouter.delete('/removeflight',controller.removeFlight)
module.exports = adminRouter