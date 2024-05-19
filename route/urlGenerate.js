const express=require('express');
const urlGenerate=express.Router();
const URL=require('../model/urlSchema');
const {generateID}=require('../controllers/generateID');

urlGenerate.post ('/',async(req,res)=>{
   const {url}=req.body;
   let json=await URL.create({
      userName:req.session.userName,
      shortId:await generateID(8),
      redirectURL:url,
      analytics:[]
   })
   let userName=req.session.userName;
   let urlUpdate=await URL.find({userName:userName});
   res.render('dashboard',{userName:userName,urls:urlUpdate});

})

module.exports=urlGenerate;