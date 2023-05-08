const mongoose=require('mongoose')
function connect()
{
    // mongoose.connect("mongodb://127.0.0.1/Flight_Booking").
    mongoose.connect("mongodb+srv://samjebadurai03:1234554321@maincluster.mdlu8ce.mongodb.net/?retryWrites=true&w=majority").
    then(res=>{console.log("Connected to Database")}).
    catch(err=>{console.log(err.message)})
}
module.exports=connect;