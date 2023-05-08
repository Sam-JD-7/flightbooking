const express = require('express')
const bookingRouter = express.Router()
controller = require('../controller/bookingController')
bookingRouter.post("/add",controller.add)
bookingRouter.post("/get",controller.get)
bookingRouter.post("/getbynumber",controller.getbynumber)
bookingRouter.delete("/deleteall",controller.deleteAll)
module.exports = bookingRouter;