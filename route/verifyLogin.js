const express=require('express');
const verifyLogin=express.Router();
const path=require('path');
const userSchema=require('../model/usersSchema') //need userSchema to verify whether the email and pass are in the database


verifyLogin.post('/',async(req,res)=>{
    const {emailId:email,passWord:password}=req.body;
    try{
        const user = await userSchema.findOne({email});
        if (!user){
            res.render('status',{status:"This email address is not registered. Please check the spelling or sign up for an account."});
        }
        if(password!=user.password){
            res.status(400).send("Invalid password!");
        }

        //add a dashboard
        res.render('dashboard',{userName:user.name});
    }catch(e){
        console.log(e);
    }
})

module.exports=verifyLogin;