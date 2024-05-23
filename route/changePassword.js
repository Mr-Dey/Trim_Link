const express=require('express');
const bcrypt = require('bcrypt');
const changePassword=express.Router();
const userSchema= require('../model/usersSchema');

changePassword.post('/',async(req,res)=>{
    if(req.session.userName){
        const {oldPassword,newPassword}=req.body;
        const user= await userSchema.findOne({name:req.session.userName});
        let isMatch = await bcrypt.compare(oldPassword,user.password);
        if(isMatch){
            //HasedPassword using bcrypt
            let salt = await bcrypt.genSalt(10);
            let hasedPassword = await bcrypt.hash(newPassword,salt);

            const result= await userSchema.findOneAndUpdate({name:req.session.userName},
            {password:hasedPassword},
                {new:true})//it will return the updated document rather the old non updated document.
            if(result){
                res.render('status',{status:"Password Updated !"});
            }else{
                res.render('status',{status:"Please Login!"});
            }
        }else{
            res.render('status',{status:"Old password is incorrect! Please Login!"})
        }
    }else{
        res.render('status',{status:"Please Login!"})
    }

})

module.exports={changePassword};