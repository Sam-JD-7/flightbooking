const mongoose = require('mongoose')
var Schema = mongoose.Schema({
    adminname : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    adminmail : {
        type : String,
        required : true
    }
})
const adminModel = mongoose.model("admins",Schema)
module.exports = adminModel;