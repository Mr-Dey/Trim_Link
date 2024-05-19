const express=require('express');
const urlSchema=require('../model/urlSchema');

const shortID=express.Router()

shortID.get('/:shortID',async(req,res)=>{
    console.log(req.params)
    let entry=await urlSchema.findOneAndUpdate({
        shortId:req.params.shortID
    },{
        $push:{
            analytics: {
                timestamp:Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL);
})

module.exports={shortID};