const express=require('express')
const app=express()
const morgan=require('morgan')
const dotenv=require('dotenv')
const bodyParser = require('body-parser')
const path=require('path')
const router=require('./server/routes/route')
const connect=require('./server/database')
const cors = require("cors")
dotenv.config({path:"config.env"})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.static("frontend/build/"))
app.use(cors({origin:"*"}))
app.use("/",router)
const PORT=process.env.PORT||3002
connect()

app.get("*",(req,res)=>{
    res.sendFile("frontend/build/index.html",{root:__dirname})
})
app.listen(PORT,()=>
{
    console.log(`Server is running on port http://localhost:${PORT}`)
})
