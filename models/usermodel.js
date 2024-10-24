const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const usermodel=mongoose.model("userdata",userschema)


module.exports=usermodel