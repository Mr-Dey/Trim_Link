const mongoose = require('mongoose');

const signupSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('signupSchema',signupSchema);