const mongoose =require ('mongoose');

const urlSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    analytics: [{
        timestamp : {
            type:Number
        }
    }]
},{timestamps:true})

const URL=mongoose.model('url',urlSchema);
module.exports=URL;