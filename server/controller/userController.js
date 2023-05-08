const model = require('../models/userModel')
const login=(req,res)=>
{
    model.findOne({usermail:req.body.email,password:req.body.password}).exec()
    .then(response=>
        {
            res.send(response)
        })
    .catch(err=>
        {
            res.send(err)
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
        res.send(err)
    })
}
module.exports = {
    login,
    signup
}