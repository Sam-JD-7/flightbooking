const { response } = require('express')
const model = require('../models/bookingModel')
const add =(req,res)=>{
    var insert = new model({
        passenger_name : req.body.passenger_name,
        passenger_mail : req.body.passenger_mail,
        flight_name : req.body.flight_name,
        flight_no : req.body.flight_no,
        arrival_at :req.body.arrival_at,
        departure_at : req.body.departure_at,
        arrival_time : req.body.arrival_time,
        depart_time : req.body.depart_time,
        tickets : req.body.tickets
    })
    insert.save().then(response=>
        res.send(response)
    )
    .catch(err=>{
        res.send(err)
    })
}
const get = (req,res)=>{
    model.find({passenger_mail :req.body.mail}).exec()
    .then(response =>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}
const deleteAll = (req,res)=>{
    model.deleteMany({}).exec()
    .then(response =>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}
const getbynumber =(req,res)=>{
    model.find({flight_no :req.body.flight_no}).exec()
    .then(response =>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}

const deletebyId = (req,res) =>{
    model.deleteMany({_id:req.body.id}).exec()
    .then (async(response) => {
        res.send(await model.find({}))
    })
    .catch(err => {
        console.log(err)
    })
}
module.exports ={
    add,
    get,
    deleteAll,
    getbynumber,
    deletebyId
}