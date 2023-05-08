const mongoose = require('mongoose')
const Schema = mongoose.Schema(
    {
        flight_no : {
            type : String,
            required : true
        },
        flight_name : {
            type : String,
            required : true
        },
        arrival_at : {
            type : String,
            required : true
        },
        depart_at : {
            type : String,
            required : true
        },
        arrival_time : {
            type : String,
            required : true
        },
        depart_time : {
            type : String,
            required : true
        },
        total_seats : {
            type : Number,
            required : true,
            default : 60
        },
        available_seats : {
            type : Number,
            required : true,
            default : 60
        },
        ticket_price : {
            type : Number,
            required : true
        },
        date : {
            type : String,
            required : true
        }
    }
)
const model = mongoose.model("flights",Schema)
module.exports = model;