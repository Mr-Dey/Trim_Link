const mongoose = require('mongoose');
const urlSchema=require('./urlSchema').Schema;

const signupSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    urlSchema:{
        type:[urlSchema],
        required:false
    }
})

module.exports=mongoose.model('signupSchema',signupSchema);