const express=require('express');
const bcrypt=require('bcrypt');
const path=require('path');
const adduser=express.Router();
const userSchema=require('../model/usersSchema');

adduser.post("/",async(req,res)=>{
    let name=(req.body.userName).toLowerCase();
    let email=(req.body.emailId).toLowerCase();
    let password=req.body.passWord;

    //generating salt for Hashing user password
    let salt =await bcrypt.genSalt(10);
    let hasedPassword=await bcrypt.hash(password,salt);

    const addData=new userSchema({
        name:name,
        email:email,
        password:hasedPassword
    })
    try{
        let result=await addData.save();
        res.render('status',{status:"Sign-up successful! Please proceed to log in."});
        console.log(result);
    }catch(e){
        if(e.code===11000){
            res.render('status',{status:"Email or username is already registered. Please login."});
        }
    }
})
module.exports=adduser;