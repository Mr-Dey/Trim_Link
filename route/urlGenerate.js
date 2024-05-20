const express=require('express');
const urlGenerate=express.Router();
const dashboard=express.Router()
const URL=require('../model/urlSchema');
const {generateID}=require('../controllers/generateID');
const { shortID } = require('./shortID');

const host="http://localhost:3000/"

urlGenerate.post ('/',async(req,res)=>{
   const {url,urlName}=req.body;
   const shortId=await generateID(8)
   const trimLink=`${host}trimlink/${shortId}`;
   console.log(trimLink);
   let json=await URL.create({
      userName:req.session.userName,
      shortId:await shortId,
      redirectURL:url,
      redirectURLName:urlName,
      trimlinkURL:trimLink,
      analytics:[]
   })
   res.redirect('/dashboard');
})


dashboard.get('/',async(req,res)=>{
   if(!req.session.userName){
      res.redirect('/');
   }else{
      let userName=req.session.userName;
      let userData=await URL.find({userName:userName});
      res.render('dashboard',{userName:userName,userData:userData});
   }
})



module.exports={
   urlGenerate,
   dashboard
};