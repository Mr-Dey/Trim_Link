const express = require('express');
const urlanalytics = express.Router();
const userSchema =require('../model/usersSchema');

urlanalytics.get('/:code',async (req,res)=>{
    const user = await userSchema.findOne({name:req.session.userName, 'urlSchema.shortId':req.params.code})
    if(user){
        let data = user.urlSchema.find(url=> url.shortId === req.params.code);
        res.render('urldetails',{urlName:data.redirectURLName,urlData:data.analytics})
    }else{
        res.redirect('/')
    }
})


module.exports={
    urlanalytics
}