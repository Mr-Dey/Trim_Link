const express=require('express');
const urlGenerate=express.Router();
const URL=require('../model/urlSchema');
const {generateID}=require('../controllers/generateID');
const { shortID } = require('./shortID');

const host="http://localhost:3000/"

urlGenerate.post ('/',async(req,res)=>{
   const {url}=req.body;
   const shortId=await generateID(8)
   const trimLink=`${host}trimlink/${shortId}`;
   console.log(trimLink);
   let json=await URL.create({
      userName:req.session.userName,
      shortId:await shortId,
      redirectURL:url,
      trimlinkURL:trimLink,
      analytics:[]
   })
   let userName=req.session.userName;
   //Find all the urls related to the user. (filter using userName)
   let urlUpdate=await URL.find({userName:userName});
   res.render('dashboard',{userName:userName,urls:urlUpdate});
})

module.exports=urlGenerate;