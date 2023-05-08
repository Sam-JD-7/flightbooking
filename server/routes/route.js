const express = require('express');
const model = require('../models/flightModel');
const router = express.Router()
const userRouter = require('./userRoute')
const adminRouter = require('./adminRoute')
const flightRouter = require('./flightRoute')
const bookingRouter = require('./bookingRoute')
router.get("/",(req,res)=>{
    res.send("hi")
})
router.use("/user",userRouter)
router.use("/admin",adminRouter)
router.use("/flights",flightRouter)
router.use("/bookings",bookingRouter)
module.exports = router;

