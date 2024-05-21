const express=require('express');
const verifyLogin=express.Router();
const path=require('path');
const userSchema=require('../model/usersSchema'); //need userSchema to verify whether the email and pass are in the database


verifyLogin.post('/',async(req,res)=>{
    const {emailId:email,passWord:password}=req.body;
    try{
        let emailLower=email.toLowerCase()
        const user = await userSchema.findOne({email:emailLower});
        if (!user){
            res.render('status',{status:"This email address is not registered. Please check the spelling or sign up for an account."});
        }
        if(password!=user.password){
            res.render('status',{status:"Incorrect login credentials."})
        }

        //session Data added
        req.session.userName=user.name;
        req.session.userEmail=user.email;

        const userData=user.urlSchema;
        res.render('dashboard',{userName:req.session.userName,userData:userData});
    }catch(e){
        console.log(e);
    }
})

module.exports={
    verifyLogin,
};