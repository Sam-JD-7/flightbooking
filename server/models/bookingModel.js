const mongoose = require('mongoose')
const Schema = mongoose.Schema ({
    passenger_name : {
        type : String,
        required : true
    },
    passenger_mail : {
        type : String,
        required : true
    },
    flight_name : {
        type : String,
        required : true
    },
    flight_no : {
        type : String,
        required : true
    },
    arrival_at : {
        type : String,
        required : true
    },
    departure_at : {
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
    tickets : {
        type : Number,
        required : true
    },
    booked_date : {
        type : Date,
        default : new Date().toLocaleDateString()
    }
})

const model = mongoose.model("Bookings",Schema)

module.exports = model;