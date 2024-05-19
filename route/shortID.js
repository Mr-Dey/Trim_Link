const express=require('express');
const urlSchema=require('../model/urlSchema');

const shortID=express.Router()

//ShortLink Handeler
shortID.get('/:shortid',async(req,res)=>{
    try{
        console.log('requisted',req.params)
        let entry=await urlSchema.findOneAndUpdate({
            shortId:req.params.shortid
        },{
            $push:{
                analytics: {
                    timestamp:Date.now()
                }
            }
        })
        res.redirect(entry.redirectURL);
    }catch(e){
        console.log(e);
    }
})

module.exports={shortID};