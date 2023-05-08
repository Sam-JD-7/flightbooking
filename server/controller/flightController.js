const model = require('../models/flightModel')
const fetchAll =(req,res)=>{
    model.find({}).exec()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}

const update =(req,res) => {
    console.log(req.body)
    model.findByIdAndUpdate(req.body.id,req.body,{new:true}).exec()
    .then(async(response)=>{
        res.send(await model.find({}))
    })
    .catch(err=>{
        res.send(err)
    })
}

const search =(req,res) => {
     model.find({date:req.body.date}).exec()
    
    .then(response=>{
        res.send(response)
        
    })
    .catch(err=>{
        res.send(err)
    })
}

module.exports = {
    fetchAll,
    update,
    search
}