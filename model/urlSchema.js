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
    redirectURLName:{
        type:String,
        required:true
    },
    trimlinkURL:{
        type:String,
        required:true
    },
    analytics: [{
        timeStamp : {
            type:Number
        },
        ip:{
            type:String
        },
        userAagent:{
            type:String
        },
        location:{
            type:String
        }
    }]
},{timestamps:true})

const URL=mongoose.model('url',urlSchema);
module.exports=URL;