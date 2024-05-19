const express=require('express');
const urlGenerate=express.Router();
const URL=require('../model/urlSchema');
const {generateID}=require('../controllers/generateID');

urlGenerate.post ('/',async(req,res)=>{
   const {url}=req.body;
   console.log(url);
    
})

module.exports=urlGenerate;