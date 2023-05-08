const express = require('express');
const controller = require('../controller/userController')
const userRouter = express.Router()
userRouter.post("/login",controller.login)
userRouter.post("/signup",controller.signup)
module.exports = userRouter;