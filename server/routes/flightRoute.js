const express = require('express')
const flightRouter = express.Router()
controller = require('../controller/flightController')
flightRouter.get('/all',controller.fetchAll)
flightRouter.put('/edit',controller.update)
flightRouter.post("/get",controller.search)

module.exports = flightRouter;