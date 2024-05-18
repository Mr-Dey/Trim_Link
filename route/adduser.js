const express=require('express');
const path=require('path');
const adduser=express.Router();
const userSchema=require('../model/usersSchema');

adduser.post("/",async(req,res)=>{
    let name=req.body.userName;
    let email=req.body.emailId;
    let password=req.body.passWord;
    const addData=new userSchema({
        name:name,
        email:email,
        password:password
    })
    try{
        let result=await addData.save();
        res.send(result);
        console.log(result);
    }catch(e){
        if(e.code===11000){
            res.sendFile(path.join(__dirname,'..','public','duplicate_email.html'));
        }
    }
})

module.exports=adduser;