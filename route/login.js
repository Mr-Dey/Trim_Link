//From signup to login page
const express=require('express');
const path=require('path');

const route=express.Router()

route.post("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'));
})

module.exports=route