const express=require('express');
const path=require('path');

const route=express.Router()

route.post("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','signup.html'));
})

module.exports=route