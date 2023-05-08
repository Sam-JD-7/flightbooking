const mongoose = require('mongoose')
var Schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    usermail : {
        type : String,
        required : true
    }
})
const userModel = mongoose.model("users",Schema)
module.exports = userModel;