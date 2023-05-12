const model = require('../models/adminModel')
const flightmodel = require('../models/flightModel')
const login = async(req,res)=>{
    await model.findOne({adminmail:req.body.email,password:req.body.password}).exec()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        console.log(err)
    })
}
const signup  = (req,res)=>{
    var insert = new model({
        username : req.body.name,
        password : req.body.password,
        usermail : req.body.email
    })
    insert.save().then(response=>
        res.send(response)
    )
    .catch(err=>{
        res,send(err)
    })
}
const addFlight =(req,res)=>{
    var insert = new flightmodel({
        flight_no : req.body.flight_no,
        flight_name : req.body.flight_name,
        arrival_at : req.body.arrival_at,
        depart_at : req.body.depart_at,
        arrival_time : req.body.arrival_time,
        depart_time : req.body.depart_time,
        total_seats : req.body.total_seats,
        available_seats : req.body.total_seats,
        ticket_price : req.body.ticket_price,
        date : req.body.date
    })
    insert.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        console.log(err)
    })
}
const removeFlight = (req,res) => {
    console.log(req.query.id)
    flightmodel.deleteOne({_id:req.query.id}).exec()
    .then (async(response) => {
        res.send(await flightmodel.find({}))
    })
    .catch(err => {
        console.log(err)
    })
}
module.exports = {
    login,
    signup,
    addFlight,
    removeFlight
}